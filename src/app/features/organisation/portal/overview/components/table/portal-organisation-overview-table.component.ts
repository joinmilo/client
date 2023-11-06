import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventEntity, Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { Column, RowDefaultAction, SortPaginate } from 'src/app/shared/widgets/table/typings/table';
import { selectOverviewData } from '../../state/portal-organisation-overview.selectors';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portal-organisation-overview-table',
  templateUrl: './portal-organisation-overview-table.component.html',
  styleUrls: ['./portal-organisation-overview-table.component.scss']
})
export class PortalOrganisationOverviewTableComponent {

  public organisations = this.store.select(selectOverviewData);

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  public actions: RowDefaultAction[] = [
    'LIKE', 'SHARE'
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