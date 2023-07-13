import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { PortalArticleDetailsActions } from '../../state/portal-article-details.actions';
import { selectArticleComments } from '../../state/portal-article-details.selectors';

@Component({
  selector: 'app-portal-article-details-comments',
  templateUrl: './portal-article-details-comments.component.html',
  styleUrls: ['./portal-article-details-comments.component.scss']
})
export class PortalArticleDetailsCommentsComponent implements OnInit, OnDestroy {
  
  public comments = this.store.select(selectArticleComments);

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    ) { }
    
  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.store.dispatch(
        PortalArticleDetailsActions.getComments(params.get(slug) || '')));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}