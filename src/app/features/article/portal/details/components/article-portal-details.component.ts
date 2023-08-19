import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { articlesFeatureKey, portalUrl, slug } from 'src/app/core/constants/core.constants';
import { ArticleFilterQueryDefinition } from 'src/app/core/typings/filter-params/article-filter-param';
import { MarkerDefinition } from 'src/app/shared/widgets/map/typings/map';
import { ArticleEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { ArticlePortalDetailsActions } from '../state/article-portal-details.actions';
import { selectArticleDetails } from '../state/article-portal-details.selectors';

@Component({
  selector: 'app-article-portal-details',
  templateUrl: './article-portal-details.component.html',
  styleUrls: ['./article-portal-details.component.scss']
})
export class ArticlePortalDetailsComponent implements OnInit, OnDestroy {

  public categoryUrl = articlesFeatureKey;

  public categoryQueryParams = ArticleFilterQueryDefinition.articleCategories;

  public article?: Maybe<ArticleEntity>;

  public mediaTitle?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  public marker?: Maybe<MarkerDefinition>;

  public portalUrl = portalUrl;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(ArticlePortalDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectArticleDetails)),
      takeUntil(this.destroy)
    ).subscribe(article => {
      this.article = article;
      this.mediaTitle = article?.uploads?.find(upload => upload?.title)?.media;

      this.media = article?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(articleMedia => articleMedia?.media)
        ?.slice(0, 5) as MediaEntity[];
    });

  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
