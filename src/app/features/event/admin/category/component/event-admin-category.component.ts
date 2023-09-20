import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EventCategoryEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { EventAdminCategoryActions } from '../state/event-admin-category.actions';
import { selectCategoryData } from '../state/event-admin-category.selectors';

@Component({
  selector: 'app-event-admin-category',
  templateUrl: './event-admin-category.component.html',
  styleUrls: ['./event-admin-category.component.scss']
})
export class EventAdminCategoryComponent {

  public categories = this.store.select(selectCategoryData);

  public actions: RowAction<EventCategoryEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'edit'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: category =>
        this.store.dispatch(EventAdminCategoryActions.deleteCategory(category)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<EventCategoryEntity>[] = [
    {
      field: 'translatables.name',
      label: 'category',
      type: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'icon',
      label: 'icon',
      type: 'ICON',
    },
    {
      field: 'color',
      label: 'color',
      type: 'COLOR',
    },
  ];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(EventAdminCategoryActions.updateParams(params));
  }

}