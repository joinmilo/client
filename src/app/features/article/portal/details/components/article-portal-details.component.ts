import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ArticleEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { articlesFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { SchemaService } from 'src/app/core/services/schema.service';
import { ArticleFilterQueryDefinition } from 'src/app/core/typings/filter-params/article-filter-param';
import { MarkerDefinition } from 'src/app/shared/widgets/map/typings/map';
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
    private store: Store,
    private schemaService: SchemaService,
    private renderer: Renderer2,
    ) {
      
     }

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

      console.log(this.article)
      console.log('category',this.article?.category?.name)
      console.log('name',this.article?.name)

      if (this.article) {
        this.schemaService.setJsonLd(this.renderer, this.article);
      }
    });

  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
