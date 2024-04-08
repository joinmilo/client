import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, OrganisationEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { PortalParticipateActions } from '../../state/portal-participate.actions';
import { selectJoinableOrganisations } from '../../state/portal-participate.selectors';


@Component({
  selector: 'app-portal-participate-join-organisation',
  templateUrl: './portal-participate-join-organisation.component.html',
  styleUrls: ['./portal-participate-join-organisation.component.scss']
})
export class PortalParticipateJoinOrganisationComponent implements OnInit, OnDestroy {

  public joinableOrganisations?: Maybe<OrganisationEntity[]>;
  public selectedOrganisations: Maybe<OrganisationEntity>[] = [];
  public value = '';
  private currentUser?: Maybe<UserContextEntity>;

  private destroy = new Subject<void>();

  constructor(
    public store: Store) {
  }

  public ngOnInit(): void {
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => this.currentUser = user);

    this.store.select(selectJoinableOrganisations)
      .pipe(takeUntil(this.destroy))
      .subscribe(joinableOrganisations => this.joinableOrganisations = joinableOrganisations); 

      this.store.dispatch(PortalParticipateActions.getOrganisations())
  }

  public filterOrganisations(value: string): void {
    value.length > 0 && this.store.dispatch(PortalParticipateActions.getOrganisations(value));
  }

  public toggleSelectedOrganisation(organisation: Maybe<OrganisationEntity>, checked: boolean): void {
    checked
      ? this.selectedOrganisations?.push(organisation)
      : this.selectedOrganisations = this.selectedOrganisations?.filter(item => item !== organisation);
  }

  public sendOrganisationRequest() {
    this.store.dispatch(PortalParticipateActions.sendOrganisationRequests(
      this.selectedOrganisations.map(organisation => ({
        approved: false,
        isPublic: false,
        organisation: { id: organisation?.id },
        userContext: { id: this.currentUser?.id },
      }))
    )) 
  }

  public clearAll() {
    this.selectedOrganisations = []
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}