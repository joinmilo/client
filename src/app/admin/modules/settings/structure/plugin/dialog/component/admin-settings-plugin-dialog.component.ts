import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, map, takeUntil } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginActions } from '../../state/admin-settings-plugin.actions';
import { selectMenuItems as selectParentMenuItems } from '../../state/admin-settings-plugin.selectors';

type PageMenuFormInput = {
  menu?: Maybe<MenuItemEntity>,
  newEntity?: boolean
};

@Component({
  selector: 'app-admin-settings-plugin-dialog',
  templateUrl: './admin-settings-plugin-dialog.component.html',
  styleUrls: ['./admin-settings-plugin-dialog.component.scss'],
})
export class AdminSettingsPluginDialogComponent implements OnDestroy{

    public parentMenuItems = this.store.select(selectParentMenuItems);

  public form = this.fb.group({
    parent: [undefined as Maybe<MenuItemEntity>],
    items: [[] as PageMenuFormInput[]],
  });

  private destroy = new Subject<void>();

  constructor(
    private dialogRef: MatDialogRef<AdminSettingsPluginDialogComponent>,
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.store.dispatch(AdminSettingsPluginActions.getMenuItems());

    this.form.controls.parent.valueChanges
      .pipe(
        map(parentMenu => parentMenu?.subMenuItems
          ?.sort((a, b) => (a?.order || 0) - (b?.order || 0))
        ),
        takeUntil(this.destroy)
      ).subscribe(items => this.form.patchValue({
          items: [
            ...[{ newEntity: true,}],
            ...items?.map(menu => ({
              menu,
              newEntity: false,
            })) ?? []
          ]
        })
      );
  }

  public sorted(indices: number[]): void {
    this.form.patchValue({
      items: indices.map(sort => ({
        ...this.form.value.items?.[sort],
      }))
    });
  }

  public saved(): void {
    this.store.dispatch(AdminSettingsPluginActions.savePluginMenuItem({
      id: this.form.value.parent?.id,
      subMenuItems: this.form.value.items
        ?.map((item, order) => item.menu
          ? { 
              id: item.menu.id,
              icon: item.menu.icon,
              header: item.menu.header,
              order
            } as MenuItemEntity
          : undefined)
        ?.filter(item => !!item)
    }));

    this.dialogRef.close({
      order: this.form.value.items?.findIndex(item => item.newEntity),
      parent: this.form.value.parent
    } as MenuItemEntity);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  // public menuItems = this.store.select(selectParentMenuItems)

  // public form = this.fb.group({
  //   menu: [undefined as Maybe<MenuItemEntity>],
  //   items: [[] as PageMenuFormInput[]],
  // });
  
  // constructor (
  //   @Inject(MAT_DIALOG_DATA) public plugin: PluginEntity, 
  //   private fb: FormBuilder,
  //   private store: Store,
  //   ) 
  //   { 
  //     this.store.dispatch(AdminSettingsPluginActions.getMenuItems());
  //   }

  // public saved(): void {
  //   this.store.dispatch(AdminSettingsPluginActions.savePluginMenuItem(
  //     {
  //       id: this.form.value.menu?.id
  //     },
  //     this.plugin.menuItems?.[0],
  //     {
  //       id: this.plugin.id,
  //       active: this.plugin.active,
  //     }
  //   ))
  // }
}