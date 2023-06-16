import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
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

  public organisations = this.store.select(selectRecentOrganisations).pipe(
    tap(result => !result?.length
      && this.store.dispatch(OrganisationPageFeatureActions.getRecentOrganisations())));

  constructor(
    private store: Store, 
  ) { }

}
