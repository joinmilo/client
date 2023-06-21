import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticlePageFeatureActions } from '../state/article-page-feature.actions';
import { selectRecentArticles } from '../state/article-page-feature.selectors';

@Component({
  selector: 'app-article-page-feature',
  templateUrl: './article-page-feature.component.html',
  styleUrls: ['./article-page-feature.component.scss']
})
export class ArticlePageFeatureComponent {
  
  public articles = this.store.select(selectRecentArticles);

  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(ArticlePageFeatureActions.getRecentArticles());
  }

}
