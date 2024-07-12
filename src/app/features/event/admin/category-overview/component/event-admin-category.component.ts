import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { AuthService } from 'ngx-cinlib/security';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { EventCategoryEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { Privilege } from 'src/app/core/typings/privilege';
import { EventAdminCategoryActions } from '../state/event-admin-category.actions';
import { selectCategoryData } from '../state/event-admin-category.selectors';

@Component({
  selector: 'app-event-admin-category',
  templateUrl: './event-admin-category.component.html',
  styleUrls: ['./event-admin-category.component.scss']
})
export class EventAdminCategoryComponent implements OnInit {

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
      field: 'name',
      label: 'category',
      value: row => this.translationService.watchTranslatable(row.translatables, 'name')
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

  public ngOnInit(): void {
    this.checkPrivileges();
  }

  private checkPrivileges(): void {
    this.isEventAdmin = this.authService.hasAnyPrivileges<Privilege>(['events_admin']);
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(EventAdminCategoryActions.updateParams(params));
  }

}
