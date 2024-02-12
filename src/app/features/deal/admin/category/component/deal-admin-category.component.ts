import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { AuthService } from 'ngx-cinlib/security';
import { Column, RowAction } from 'ngx-cinlib/tables';
import {
    DealCategoryEntity,
    FilterSortPaginateInput,
} from 'src/app/core/api/generated/schema';
import { Privilege } from 'src/app/core/typings/privilege';
import { DealAdminCategoryActions } from '../state/deal-admin-category.actions';
import { selectCategoryData } from '../state/deal-admin-category.selectors';

@Component({
  selector: 'app-deal-admin-category',
  templateUrl: './deal-admin-category.component.html',
  styleUrls: ['./deal-admin-category.component.scss'],
})
export class DealAdminCategoryComponent implements OnInit {
  public categories = this.store.select(selectCategoryData);

  public isDealAdmin = false;

  public actions: RowAction<DealCategoryEntity>[] = [
    {
      icon: 'pen-to-square',
      callback: (row) =>
        this.router.navigate([row?.id, 'form'], {
          relativeTo: this.activatedRoute,
        }),
      tooltipLabel: 'edit',
    },
    {
      icon: 'trash',
      callback: (category) =>
        this.store.dispatch(DealAdminCategoryActions.deleteCategory(category)),
      tooltipLabel: 'delete',
    },
  ];

  public columns: Column<DealCategoryEntity>[] = [
    {
      field: 'translatables.name',
      label: 'category',
      value: (row) =>
        this.translationService.translatable(row.translatables, 'name'),
    },
    {
      field: 'icon',
      label: 'icon',
      type: 'ICON'
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
    private translationService: TranslationService
  ) {}

  public ngOnInit(): void {
    this.checkPrivileges();
  }
  
  private checkPrivileges() {
    this.isDealAdmin = this.authService.hasAnyPrivileges<Privilege>(['deals_admin']);
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(DealAdminCategoryActions.updateParams(params));
  }
}
