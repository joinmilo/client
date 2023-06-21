import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CardType } from 'src/app/shared/card/typings/card';
import { ContestPageFeatureActions } from '../state/contest-page-feature.actions';
import { selectRecentContests } from '../state/contest-page-feature.selectors';

@Component({
  selector: 'app-contest-page-feature',
  templateUrl: './contest-page-feature.component.html',
  styleUrls: ['./contest-page-feature.component.scss']
})
export class ContestPageFeatureComponent {
  
  public cardType = CardType.Content;

  public contests = this.store.select(selectRecentContests);

  constructor(
    private store: Store, 
  ) { 
    this.store.dispatch(ContestPageFeatureActions.getRecentContests());
  }

}
