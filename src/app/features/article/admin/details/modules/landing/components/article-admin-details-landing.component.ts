import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ArticleEntity, MediaEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { ArticleAdminDetailsLandingActions } from '../state/article-admin-details-landing.actions';
import { selectArticleAdminDetailsLanding } from '../state/article-admin-details-landing.selectors';

@Component({
  selector: 'app-article-admin-details-landing',
  templateUrl: './article-admin-details-landing.component.html',
  styleUrls: ['./article-admin-details-landing.component.scss']
})
export class ArticleAdminDetailsLandingComponent implements OnInit, OnDestroy {

  public article?: Maybe<ArticleEntity>;

  public media?: Maybe<MediaEntity[]>;

  public expanded = false;
  
  @ViewChild('contentParagraph', { static: true })
  private contentParagraph?: ElementRef<HTMLParagraphElement>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(ArticleAdminDetailsLandingActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectArticleAdminDetailsLanding)),
      takeUntil(this.destroy)
    ).subscribe(article => {
      this.article = article;
      this.media = article?.uploads?.map(articleMedia => articleMedia?.media)
        ?.slice(0, 10) as MediaEntity[];
    });
  }

  toggleShowMore() {
    this.contentParagraph?.nativeElement.classList.toggle('expanded');
    this.expanded = !this.expanded;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}