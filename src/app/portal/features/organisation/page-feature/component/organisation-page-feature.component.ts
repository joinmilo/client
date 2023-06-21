import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { OrganisationPageFeatureActions } from '../state/organisation-page-feature.actions';
import { selectRecentOrganisations } from '../state/organisation-page-feature.selectors';

@Component({
  selector: 'app-organisation-page-feature',
  templateUrl: './organisation-page-feature.component.html',
  styleUrls: ['./organisation-page-feature.component.scss']
})
export class OrganisationPageFeatureComponent {
  
  public cardType = CardType.Contact;

  public organisations = this.store.select(selectRecentOrganisations);

  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(OrganisationPageFeatureActions.getRecentOrganisations());
  }

}
