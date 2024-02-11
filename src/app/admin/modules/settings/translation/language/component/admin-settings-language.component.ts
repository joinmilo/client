import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { FilterSortPaginateInput, LanguageEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsLanguageActions } from '../state/admin-settings-language.actions';
import { selectLanguages } from '../state/admin-settings-language.selectors';

@Component({
  selector: 'app-admin-settings-language',
  templateUrl: './admin-settings-language.component.html',
  styleUrls: ['./admin-settings-language.component.scss'],
})
export class AdminSettingsLanguageComponent {

  public languages = this.store.select(selectLanguages);

  public actions: RowAction<LanguageEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
  ];

  public columns: Column<LanguageEntity>[] = [
    {
      field: 'name',
      label: 'name',
      sort: true
    },
    {
      field: 'locale',
      label: 'locale',
      sort: true
    },
    {
      field: 'active',
      label: 'active',
      sort: true,
      type: 'BOOLEAN'
    },

  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  public updateParams(params: FilterSortPaginateInput): void {
    this.store.dispatch(AdminSettingsLanguageActions.updateParams(params));
  }
}
