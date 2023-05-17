import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { CommentActions } from './../state/comment.actions';

interface DialogData {
  eventId: Maybe<string>;
  organisationId: Maybe<string>;
  articleId: Maybe<string>;
}

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

@Component({
  selector: 'app-comment-dialog',
  templateUrl: 'comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss'],
})
export class CommentDialogComponent {

  public form = this.fb.group({
    content: ['', [Validators.required]],
  });


  constructor(
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    private fb: FormBuilder,
    private Store: Store,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onSubmit() {

    switch (true) {
      case !!this.data.eventId:
        this.Store.dispatch(CommentActions.saveEventComment({
          content: this.form.value.content,
          approved: false,
          event: { id: this.data.eventId }
          // TODO: add content to translatable, add usercontext
        }));
        break;

      case !!this.data.organisationId:
        // TODO: add orga Actions
        break;

      case !!this.data.articleId:
        // TODO: add article Actions
        break;

      default:
        break;
    }
  }
}
