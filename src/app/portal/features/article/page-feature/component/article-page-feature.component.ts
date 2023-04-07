import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { ArticlePageFeatureActions } from '../state/article-page-feature.actions';
import { selectRecentArticleCards } from '../state/article-page-feature.selectors';

@Component({
  selector: 'app-article-page-feature',
  templateUrl: './article-page-feature.component.html',
  styleUrls: ['./article-page-feature.component.scss']
})
export class ArticlePageFeatureComponent {
  
  public articles = this.store.select(selectRecentArticleCards).pipe(
    tap(result => !result?.length
      && this.store.dispatch(ArticlePageFeatureActions.getRecentArticles())));

  constructor(
    private store: Store, 
  ) { }

}
