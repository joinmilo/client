import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ArticleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { RadioCardInput } from 'src/app/shared/form/radio-card/typings/radio-card-input';
import { commentsRoute, favoritesRoute, ratingsRoute, searchRoute, visitorsRoute } from '../../../constants/article-admin-details.constants';
import { ArticleAdminDetailsLayoutActions } from '../state/article-admin-details-layout.actions';
import { selectArticleAdminDetailsLayout } from '../state/article-admin-details-layout.selectors';

@Component({
  selector: 'app-article-admin-details-layout',
  templateUrl: './article-admin-details-layout.component.html',
  styleUrls: ['./article-admin-details-layout.component.scss']
})
export class ArticleAdminDetailsLayoutComponent implements OnInit, OnDestroy {

  public article?: Maybe<ArticleEntity>;

  private destroy = new Subject<void>();

  public inputs: RadioCardInput[] = [
    {
      icon: ['fas', 'magnifying-glass'],
      label: 'overview',
      value: '',
    },
    {
      icon: ['far', 'eye'],
      label: 'pageVisitors',
      value: visitorsRoute
    },
    {
      icon: ['fab', 'google'],
      label: 'googleSearch',
      value: searchRoute
    },
    {
      icon: ['far', 'comment-dots'],
      label: 'comments',
      value: commentsRoute
    },

    {
      icon: ['far', 'heart'],
      label: 'favorites',
      value: favoritesRoute
    },
    {
      icon: ['far', 'star'],
      label: 'ratings',
      value: ratingsRoute
    },
  ];

  public initValue = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(ArticleAdminDetailsLayoutActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectArticleAdminDetailsLayout)),
      takeUntil(this.destroy)
    ).subscribe(article => {
      const lastUrlSegment = this.router.url.split('?')[0].split('/').pop();
      if (lastUrlSegment && article && lastUrlSegment !== article?.slug) {
        this.initValue = lastUrlSegment;
      }

      this.article = article;
    });
  }

  public route(route: string): void {
    this.router.navigate([`./${route}`], { relativeTo: this.activatedRoute });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}