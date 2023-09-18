import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { AdminSettingsPageActions } from '../state/admin-settings-pages.actions';
import { selectPages } from '../state/admin-settings-pages.selectors';

@Component({
  selector: 'app-admin-settings-pages-overview',
  templateUrl: './admin-settings-pages-overview.component.html',
  styleUrls: ['./admin-settings-pages-overview.component.scss'],
})
export class AdminSettingsPagesOverviewComponent {


  public pages = this.store.select(selectPages);

  public actions: RowAction<PageEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: page =>
        this.store.dispatch(AdminSettingsPageActions.deletePage(page)),
      tooltipLabel: 'delete'
    },

    'SHARE',
  ];

  public columns: Column<PageEntity>[] = [
    {
      field: 'translatables.name',
      label: 'name',
      type: row => this.translationService.translatable(row.translatables, 'name'),
      sort: true,
    },
    {
      field: 'callText',
      label: 'callText',
    },
    {
      field: 'callUrl',
      label: 'callUrl',
    },
    {
      field: 'isLanding',
      label: 'isLanding',
      type: 'BOOLEAN',
      sort: true,
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(AdminSettingsPageActions.updateParams(params));
  }

  public rowClicked(page: Maybe<PageEntity>): void {
    this.router.navigate(['../', page?.slug], { relativeTo: this.activatedRoute });
  }
}
