import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ContestTypeEntity, FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { ContestAdminTypesActions } from '../state/contest-admin-types.actions';
import { selectTypesData } from '../state/contest-portal-types.selectors';

@Component({
  selector: 'app-contest-admin-types',
  templateUrl: './contest-admin-types.component.html',
  styleUrls: ['./contest-admin-types.component.scss']
})
export class ContestAdminTypesComponent {

  public contests = this.store.select(selectTypesData);

  public actions: RowAction<ContestTypeEntity>[] = [    
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate([row?.id, 'form'], { relativeTo: this.activatedRoute }),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: type =>
        this.store.dispatch(ContestAdminTypesActions.deleteType(type)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<ContestTypeEntity>[] = [
    {
      field: 'translatables.name',
      label: 'type',
      value: row => this.translationService.translatable(row.translatables, 'name')
    },
  ];
  
  constructor(
    private store: Store,
    private translationService: TranslationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(ContestAdminTypesActions.updateParams(params));
  }
}