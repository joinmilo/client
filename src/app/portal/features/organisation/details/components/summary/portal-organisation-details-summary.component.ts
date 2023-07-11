import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { OrganisationEntity } from 'src/schema/schema';
import { selectOrganisationDetails } from '../../state/portal-organisation-details.selectors';


@Component({
  selector: 'app-portal-organisation-details-summary',
  templateUrl: './portal-organisation-details-summary.component.html',
  styleUrls: ['./portal-organisation-details-summary.component.scss'],
})
export class PortalOrganisationDetailsSummaryComponent implements OnInit, OnDestroy {

  public organisation?: Maybe<OrganisationEntity> | undefined;

  private destroy = new Subject<void>();

  @Output()
  public addressClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store) { }
  
  public ngOnInit(): void {
    this.store.select(selectOrganisationDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe(organisation => this.organisation = organisation);
  }

  public onAddressClicked(): void {
    this.addressClicked.emit();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
