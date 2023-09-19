import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DealCategoryEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { DealAdminCategoryActions } from '../state/deal-admin-category.actions';
import { selectCategoryData } from '../state/deal-admin-category.selectors';

@Component({
  selector: 'app-deal-admin-category',
  templateUrl: './deal-admin-category.component.html',
  styleUrls: ['./deal-admin-category.component.scss']
})
export class DealAdminCategoryComponent {

  public categories = this.store.select(selectCategoryData);

  public actions: RowAction<DealCategoryEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: category =>
        this.store.dispatch(DealAdminCategoryActions.deleteCategory(category)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<DealCategoryEntity>[] = [
    {
      field: 'translatables.name',
      label: 'category',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'icon',
      label: 'icon',
    },
    {
      field: 'color',
      label: 'color',
    },
  ];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(DealAdminCategoryActions.updateParams(params));
  }

}