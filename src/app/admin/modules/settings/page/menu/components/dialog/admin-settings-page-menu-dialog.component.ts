import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, map, switchMap, takeUntil } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageMenuActions } from '../../state/admin-settings-page-menu.actions';
import { selectParentMenuItems } from '../../state/admin-settings-page-menu.selectors';

type PageMenuFormInput = {
  menu?: Maybe<MenuItemEntity>,
  newEntity?: boolean
};

@Component({
  selector: 'app-admin-settings-page-menu-dialog',
  templateUrl: './admin-settings-page-menu-dialog.component.html',
  styleUrls: ['./admin-settings-page-menu-dialog.component.scss'],
})
export class AdminSettingsPageMenuDialogComponent implements OnDestroy {

  public parentMenuItems = this.store.select(selectParentMenuItems);

  public form = this.fb.group({
    parentId: ['' as Maybe<string>],
    items: [[] as PageMenuFormInput[]],
  });

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.store.dispatch(AdminSettingsPageMenuActions.getParentMenuItems());

    this.form.controls.parentId.valueChanges
      .pipe(
        switchMap(id => this.store.select(selectParentMenuItems)
          .pipe(map(parentMenu => parentMenu?.find(item => item.id === id)?.subMenuItems))),
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
    this.store.dispatch(AdminSettingsPageMenuActions.saveParentMenu({
      id: this.form.value.parentId,
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
    }))
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}