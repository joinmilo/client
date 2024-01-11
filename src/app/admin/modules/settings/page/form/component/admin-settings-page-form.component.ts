import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MenuItemEntity, PageEmbeddingEntity } from 'src/app/core/api/generated/schema';

import { ActivatedRoute } from '@angular/router';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AdminSettingsPageFormActions } from '../state/admin-settings-page-form.actions';
import { selectPageForm } from '../state/admin-settings-page-form.selectors';

@Component({
  selector: 'app-admin-settings-page-form',
  templateUrl: './admin-settings-page-form.component.html',
  styleUrls: ['./admin-settings-page-form.component.scss'],
})
export class AdminSettingsPageFormComponent implements OnInit, OnDestroy {

  public contentForm = this.fb.group({
    id: ['' as Maybe<string>],
    label: ['' as Maybe<string>, [Validators.required]],
    embeddings: [[] as Maybe<PageEmbeddingEntity>[], [Validators.required]],
  });

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

  public ngOnInit(): void {
    this.activatedRoute?.parent?.params.pipe(
      filter(params => !!params[slug]),
      tap(params => this.store.dispatch(AdminSettingsPageFormActions.getPage(params[slug]))),
      switchMap(() => this.store.select(selectPageForm)),
      filter(page => !!page?.id),
      takeUntil(this.destroy)
    ).subscribe(page => {

      this.contentForm.patchValue({
        id: page?.id,
        label: page?.label,
        embeddings: page?.embeddings,
      });

      this.menuForm.patchValue({
        menuItems: page?.menuItems
      });

    });
  }

  public cancelled(): void {
    this.store.dispatch(AdminSettingsPageFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(AdminSettingsPageFormActions.save({
      id: this.contentForm.value.id,
      label: this.contentForm.value.label,
      embeddings: this.contentForm.value.embeddings,
      menuItems: this.menuForm.value.menuItems
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}