import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ArticleEntity, Maybe, MediaEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { authorsFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { selectArticleDetails } from '../../state/article-portal-details.selectors';

@Component({
  selector: 'app-article-portal-details-author',
  templateUrl: './article-portal-details-author.component.html',
  styleUrls: ['./article-portal-details-author.component.scss'],
})
export class ArticlePortalDetailsAuthorComponent implements OnInit, OnDestroy, AfterViewInit {

  public article?: Maybe<ArticleEntity> | undefined;

  public authorAvatar?: Maybe<UserContextEntity>;

  public profilePicture?: Maybe<MediaEntity> | undefined;

  public authorsFeatureKey = authorsFeatureKey;

  public portalUrl = portalUrl;

  private destroy = new Subject<void>();
  
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private store: Store) { }

  public ngOnInit(): void {
    this.store.select(selectArticleDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe((article) => {
        this.article = article;
        this.profilePicture = article?.author?.uploads?.find(upload => upload?.profilePicture)?.media;
        this.authorAvatar = article?.author
      });
  }

  public author(): string {
    return this.article?.author?.user?.firstName
      || this.article?.author?.user?.firstName
      ? `${this.article.author.user.firstName} ${this.article.author.user.lastName}`
      : this.article?.publicAuthor?.name
        ? this.article.publicAuthor.name
        : '';
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngAfterViewInit() {
    const spanElement = this.elementRef.nativeElement.querySelector('.border-image');
    const spanWidth = spanElement.offsetWidth;

    const fontSize = spanWidth * 0.025 - 1.5 + 'em' ;
    this.renderer.setStyle(spanElement, 'font-size', fontSize);
  }
}