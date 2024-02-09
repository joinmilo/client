import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { Column, RowAction, SortPaginate } from 'src/app/shared/widgets/table/typings/table';
import { likeAction, shareAction } from 'src/app/shared/widgets/table/utils/table-component-action.utils';
import { selectOverviewData } from '../../state/portal-organisation-overview.selectors';

@Component({
  selector: 'app-portal-organisation-overview-table',
  templateUrl: './portal-organisation-overview-table.component.html',
  styleUrls: ['./portal-organisation-overview-table.component.scss']
})
export class PortalOrganisationOverviewTableComponent {

  public organisations = this.store.select(selectOverviewData);

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public actions: RowAction<OrganisationEntity>[] = [
    likeAction('OrganisationEntity'),
    shareAction('OrganisationEntity')
  ];
  
  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public columns: Column<OrganisationEntity>[] = [
    {
      field: 'name',
      label: 'name',
      sort: true,
    },
    {
      field: 'contact.email',
      label: 'email',
      sort: true,
    },
    {
      field: 'contact.phone',
      label: 'phone',
      sort: true,
    },
    {
      field: 'address',
      label: 'address',
      type: 'ADDRESS'
    },
  ];

  public rowClicked(organisation: Maybe<OrganisationEntity>): void {
    this.router.navigate([organisation?.slug], { relativeTo: this.activatedRoute })
  }
}