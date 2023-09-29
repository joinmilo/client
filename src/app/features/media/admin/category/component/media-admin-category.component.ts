import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, InfoMediaCategoryEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { MediaAdminCategoryActions } from '../state/media-admin-category.actions';
import { selectCategoryData } from '../state/media-admin-category.selectors';

@Component({
  selector: 'app-media-admin-category',
  templateUrl: './media-admin-category.component.html',
  styleUrls: ['./media-admin-category.component.scss']
})
export class MediaAdminCategoryComponent {

  public categories = this.store.select(selectCategoryData);

  public actions: RowAction<InfoMediaCategoryEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'form'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: category =>
        this.store.dispatch(MediaAdminCategoryActions.deleteCategory(category)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<InfoMediaCategoryEntity>[] = [
    {
      field: 'translatables.name',
      label: 'category',
      value: row => this.translationService.translatable(row.translatables, 'name')
    },
  ];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(MediaAdminCategoryActions.updateParams(params));
  }

}