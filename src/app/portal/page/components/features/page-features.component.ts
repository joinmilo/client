import { Component, Input, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { CardInput } from 'src/app/core/typings/card';
import { articlesFeatureKey, eventsFeatureKey } from 'src/app/portal/common/constants/common.constants';
import { Maybe, PageFeatureEntity } from 'src/schema/schema';
import { PageFeatureActions } from '../../state/page.actions';
import { selectRecentArticles } from '../../state/page.selectors';

@Component({
  selector: 'app-page-features',
  templateUrl: './page-features.component.html',
  styleUrls: ['./page-features.component.scss']
})
export class PageFeaturesComponent implements OnChanges {

  @Input()
  public pageFeatures?: Maybe<Maybe<PageFeatureEntity>[]>

  public articlesFeatureKey = articlesFeatureKey;
  public eventFeatureKey = eventsFeatureKey;
  
  public articles?: Observable<CardInput[]>;


  constructor(
    private store: Store, 
  ) { }

  public ngOnChanges(): void {
    if (this.pageFeatures?.length) {
      [...this.pageFeatures]?.sort((f1, f2) => (f2?.order || 0) - (f1?.order || 0));
      this.pageFeatures?.forEach(feature => {
        switch(feature?.feature?.key) {
          case this.articlesFeatureKey:
            this.fetchRecentArticles();
            break;
        }
      })
    }
  }

  private fetchRecentArticles(): void {
    this.articles = this.store.select(selectRecentArticles).pipe(
      tap(result => !result?.length
        && this.store.dispatch(PageFeatureActions.getRecentArticles())));
  }

}
