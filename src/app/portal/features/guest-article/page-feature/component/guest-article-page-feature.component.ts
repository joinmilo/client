import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GuestArticlePageFeatureActions } from '../state/guest-article-page-feature.actions';
import { selectRecentGuestArticles } from '../state/guest-article-page-feature.selectors';

@Component({
  selector: 'app-guest-article-page-feature',
  templateUrl: './guest-article-page-feature.component.html',
  styleUrls: ['./guest-article-page-feature.component.scss']
})
export class GuestArticlePageFeatureComponent {
  
  public guestArticles = this.store.select(selectRecentGuestArticles);

  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(GuestArticlePageFeatureActions.getRecentGuestArticles());
  }

}
