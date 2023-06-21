import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { DealPageFeatureActions } from '../state/deal-page-feature.actions';
import { selectRecentDeals } from '../state/deal-page-feature.selectors';

@Component({
  selector: 'app-deal-page-feature',
  templateUrl: './deal-page-feature.component.html',
  styleUrls: ['./deal-page-feature.component.scss']
})
export class DealPageFeatureComponent {

  public cardType = CardType.Content;
  
  public deals = this.store.select(selectRecentDeals);

  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(DealPageFeatureActions.getRecentDeals());
  }

}
