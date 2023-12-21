import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  DealCategoryEntity,
  FilterSortPaginateInput,
} from 'src/app/core/api/generated/schema';
import { AuthService } from 'src/app/core/services/auth.service';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Privilege } from 'src/app/core/typings/privilege';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
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

  ngOnInit() {
    this.checkPrivileges();
  }
  
  private checkPrivileges() {
    const requiredPrivileges: Privilege[] = ['deals_admin'];
    this.isDealAdmin = this.authService.hasAnyPrivileges(requiredPrivileges);
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(DealAdminCategoryActions.updateParams(params));
  }
}
