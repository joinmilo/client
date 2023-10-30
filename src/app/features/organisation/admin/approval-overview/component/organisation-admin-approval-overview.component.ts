import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';

import { OrganisationAdminApprovalOverviewActions } from '../state/organisation-admin-approval-overview.actions';
import { selectOverviewData } from '../state/organisation-admin-approval-overview.selectors';

@Component({
  selector: 'app-organisation-admin-approval-overview',
  templateUrl: './organisation-admin-approval-overview.component.html',
  styleUrls: ['./organisation-admin-approval-overview.component.scss']
})
export class OrganisationAdminApprovalOverviewComponent {

  public organisation = this.store.select(selectOverviewData);

  public actions: RowAction<OrganisationEntity>[] = [
    {
      icon: 'toggle-off',
      callback: organisation =>
        this.store.dispatch(OrganisationAdminApprovalOverviewActions.toggleOrganisationApproval(organisation)),
      tooltipLabel: 'changeOrganisationApproval',
    },
    {
      icon: 'pen-to-square',
      callback: row =>
        this.router.navigate(['admin/organisations', row?.slug, 'form']),
      tooltipLabel: 'edit'
    },
    {
      icon: 'trash',
      callback: organisation =>
        this.store.dispatch(OrganisationAdminApprovalOverviewActions.deleteOrganisation(organisation)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<OrganisationEntity>[] = [
    {
      field: 'translatables.name',
      label: 'title',
      value: row => this.translationService.translatable(row.translatables, 'name')
    },
    {
      field: 'publicAuthor.name',
      label: 'author',
    },
    {
      field: 'publicAuthor.phone',
      label: 'phone',
    },
    {
      field: 'publicAuthor.email',
      label: 'email',
    },
    {
      field: 'created',
      label: 'created',
      type: 'DATETIME',
      sort: true,
    },
    {
      field: 'approved',
      label: 'approved',
      type: 'BOOLEAN',
      sort: true,
    },
  ];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
    private translationService: TranslationService,
  ) { }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(OrganisationAdminApprovalOverviewActions.updateParams(params));
  }

  public rowClicked(organisation: Maybe<OrganisationEntity>): void {
    this.router.navigate([organisation?.slug], { relativeTo: this.activatedRoute })
  }
}