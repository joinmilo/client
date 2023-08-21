import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { selectOverviewData } from '../state/media-portal-overview.selectors';
import { FilterSortPaginateInput, InfoMediaEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { MediaAdminOverviewActions } from '../state/media-admin-overview.actions';
import { TranslationService } from 'src/app/core/services/translation.service';
import { MatDialog } from '@angular/material/dialog';
import { MediaDisplayTypeForm } from 'src/app/core/typings/filter-params/media-display';

@Component({
  selector: 'app-media-admin-overview',
  templateUrl: './media-admin-overview.component.html',
  styleUrls: ['./media-admin-overview.component.scss']
})
export class MediaAdminOverviewComponent {

  public mediaTypeDisplayForm = MediaDisplayTypeForm;

  public media = this.store.select(selectOverviewData);

  public actions: RowAction<InfoMediaEntity>[] = [
    { type: 'LIKE' },
    { type: 'SHARE' }
  ];

  public columns: Column<InfoMediaEntity>[] = [
    {
      field: 'category.name',
      label: 'category',
      type: row => this.translationService.translatable(row.category?.translatables, 'name')
    },
    {
      field: 'media.extension',
      label: 'type',
    }
  ];

  constructor(
    private store: Store,
    private translationService: TranslationService,

    public dialog: MatDialog,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    console.log(params);
    this.store.dispatch(MediaAdminOverviewActions.updateParams(params));
  }
}
