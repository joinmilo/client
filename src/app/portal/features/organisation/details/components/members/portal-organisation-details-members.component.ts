import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { selectMembers } from '../../state/portal-organisation-details.selectors';


@Component({
  selector: 'app-portal-organisation-details-members',
  templateUrl: './portal-organisation-details-members.component.html',
  styleUrls: ['./portal-organisation-details-members.component.scss']
})
export class PortalOrganisationDetailsMembersComponent {

  public members = this.store.select(selectMembers);

  public cardType = CardType.Member;

  constructor(
    private store: Store) { }
}