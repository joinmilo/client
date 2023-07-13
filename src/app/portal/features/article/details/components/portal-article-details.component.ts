import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { articlesFeatureKey, slug } from 'src/app/core/constants/core.constants';
import { ArticleFilterQueryDefinition } from 'src/app/core/typings/filter-params/article-filter-param';
import { MarkerDefinition } from 'src/app/shared/map/typings/map';
import { ArticleEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { PortalArticleDetailsActions } from '../state/portal-article-details.actions';
import { selectArticleDetails } from '../state/portal-article-details.selectors';

@Component({
  selector: 'app-portal-article-details',
  templateUrl: './portal-article-details.component.html',
  styleUrls: ['./portal-article-details.component.scss']
})
export class PortalArticleDetailsComponent implements OnInit, OnDestroy {

  public categoryUrl = articlesFeatureKey;

  public categoryQueryParams = ArticleFilterQueryDefinition.articleCategories;

  public article?: Maybe<ArticleEntity>;

  public titleImage?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  public marker?: Maybe<MarkerDefinition>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalArticleDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectArticleDetails)),
      takeUntil(this.destroy)
    ).subscribe(article => {
      this.article = article;
      this.titleImage = article?.uploads?.find(upload => upload?.title)?.media;

      this.media = article?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(articleMedia => articleMedia?.media)
        ?.slice(0, 3) as MediaEntity[];
    });

  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}