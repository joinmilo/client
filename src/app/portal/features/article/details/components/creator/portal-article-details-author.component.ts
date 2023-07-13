import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ArticleEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { selectArticleDetails } from '../../state/portal-article-details.selectors';

@Component({
  selector: 'app-portal-article-details-author',
  templateUrl: './portal-article-details-author.component.html',
  styleUrls: ['./portal-article-details-author.component.scss'],
})
export class PortalArticleDetailsAuthorComponent implements OnInit, OnDestroy {

  public article?: Maybe<ArticleEntity> | undefined;

  public profilePicture?: Maybe<MediaEntity> | undefined;

  private destroy = new Subject<void>();

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.select(selectArticleDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe((article) => {
        this.article = article;
        this.profilePicture = article?.author?.uploads?.find(upload => upload?.profilePicture)?.media;
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}