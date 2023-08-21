import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { selectOverviewData } from '../state/contest-portal-overview.selectors';
import { ContestEntity, FilterSortPaginateInput } from 'src/schema/schema';
import { ContestAdminOverviewActions } from '../state/contest-admin-overview.actions';

@Component({
  selector: 'app-contest-admin-overview',
  templateUrl: './contest-admin-overview.component.html',
  styleUrls: ['./contest-admin-overview.component.scss']
})
export class ContestAdminOverviewComponent {

  public contests = this.store.select(selectOverviewData);

  public actions: RowAction<ContestEntity>[] = [
    { type: 'LIKE' },
    { type: 'SHARE' }
  ];

  public columns: Column<ContestEntity>[] = [
    {
      field: 'translatables.name',
      label: 'contests',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'contact.name',
      label: 'organizator',
      type: row => `${row.contact?.name}`
    },
    {
      field: 'type.name',
      label: 'type',
      type: row => this.translationService.translatable(row.type?.translatables, 'name')
    },
    {
      field: 'voteEndDate',
      label: 'voteEndDate',
      type: 'DATETIME',
      sort: true,
    }
  ];

  constructor(
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(ContestAdminOverviewActions.updateParams(params));
  }
}
