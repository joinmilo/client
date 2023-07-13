import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
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
    private router: Router,
    private store: Store) { }

  public saveComment(content: string): void {
    this.store.select(selectCurrentUser)
      .pipe(take(1))
      .subscribe(user => user?.id
        ? this.store.dispatch(PortalArticleDetailsActions.saveArticleComment({
            content,
          }))
        : this.router.navigate(['/user', 'login-required']))
  }
}