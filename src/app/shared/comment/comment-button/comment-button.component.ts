import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe } from 'graphql/jsutils/Maybe';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-comment-button',
  templateUrl: './comment-button.component.html',
  styleUrls: ['./comment-button.component.scss']
})
export class CommentButtonComponent {

  @Input()
  eventId?: Maybe<string>;

  @Input()
  organisationId?: Maybe<string>;

  @Input()
  articleId?: Maybe<string>;

  constructor(public dialog: MatDialog) { }

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
