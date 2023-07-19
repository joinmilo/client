import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { PortalArticleDetailsActions } from '../../state/portal-article-details.actions';
import { selectArticleDetails } from '../../state/portal-article-details.selectors';

@Component({
  selector: 'app-portal-article-details-comment',
  templateUrl: './portal-article-details-comment.component.html',
  styleUrls: ['./portal-article-details-comment.component.scss']
})
export class PortalArticleDetailsCommentComponent {

  public lastComment = this.store.select(selectArticleDetails)
    .pipe(map(article => article?.lastArticleComment));

  constructor(
    private store: Store) { }

  public saveComment(content: string): void {
    this.store.dispatch(PortalArticleDetailsActions.saveArticleComment({
      content,
    }));
  }
}