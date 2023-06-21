import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-save-comment',
  templateUrl: './save-comment.component.html',
  styleUrls: ['./save-comment.component.scss']
})
export class SaveCommentComponent{

  @Input()
  eventId?: Maybe<string>;

  @Input()
  organisationId?: Maybe<string>;

  @Input()
  articleId?: Maybe<string>;

  public currentUser = this.store.select(selectCurrentUser);

  constructor(public dialog: MatDialog, private store: Store) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CommentDialogComponent, {
      width: '32rem',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        eventId: this.eventId,
        organisationId: this.organisationId,
        articleId: this.articleId
      }
    });
  }
}
