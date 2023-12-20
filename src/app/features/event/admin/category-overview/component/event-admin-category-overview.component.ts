import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EventCategoryEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { AuthService } from 'src/app/core/services/auth.service';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Privilege } from 'src/app/core/typings/privilege';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { EventAdminCategoryActions } from '../state/event-admin-category.actions';
import { selectCategoryData } from '../state/event-admin-category.selectors';

@Component({
  selector: 'app-event-admin-category-overview',
  templateUrl: './event-admin-category-overview.component.html',
  styleUrls: ['./event-admin-category-overview.component.scss']
})
export class EventAdminCategoryOverviewComponent implements OnInit {

  public categories = this.store.select(selectCategoryData);

  public isEventAdmin = false;

  public actions: RowAction<EventCategoryEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'form'], { relativeTo: this.activatedRoute }),
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
      value: row => this.translationService.translatable(row.translatables, 'name')
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
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }
  
  ngOnInit() {
    this.checkPrivileges();
  }
  
  private checkPrivileges() {
    const requiredPrivileges: Privilege[] = ['events_admin'];
    this.isEventAdmin = this.authService.hasAnyPrivileges(requiredPrivileges);
  }
  
  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(EventAdminCategoryActions.updateParams(params));
  }
  
}