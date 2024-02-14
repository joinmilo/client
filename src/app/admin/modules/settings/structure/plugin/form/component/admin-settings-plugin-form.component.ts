import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'ngx-cinlib/core';
import { Subject } from 'rxjs';
import { MenuItemEntity } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-admin-settings-plugin-form',
  templateUrl: './admin-settings-plugin-form.component.html',
  styleUrls: ['./admin-settings-plugin-form.component.scss'],
})
export class AdminSettingsPluginFormComponent {

  public menuForm = this.fb.group({
    menuItems: [] as Maybe<Maybe<MenuItemEntity>[]>
  });

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {
  }

  // public ngOnInit(): void {
  //   this.activatedRoute?.parent?.params.pipe(
  //     filter(params => !!params[slug]),
  //     tap(params => this.store.dispatch(AdminSettingsPageFormActions.getPage(params[slug]))),
  //     switchMap(() => this.store.select(selectPageForm)),
  //     filter(page => !!page?.id),
  //     takeUntil(this.destroy)
  //   ).subscribe(page => {

  //     this.menuForm.patchValue({
  //       menuItems: page?.menuItems
  //     });

  //   });
  // }

  // public cancelled(): void {
  //   this.store.dispatch(AdminSettingsPageFormActions.cancelled());
  // }

  // public saved(): void {
  //   this.store.dispatch(AdminSettingsPageFormActions.save({
  //     id: this.contentForm.value.id,
  //     label: this.contentForm.value.label,
  //     embeddings: this.contentForm.value.embeddings,
  //     menuItems: this.menuForm.value.menuItems
  //   }));
  // }

  // public ngOnDestroy(): void {
  //   this.destroy.next();
  //   this.destroy.complete();
  // }
}
