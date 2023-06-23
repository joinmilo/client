import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { UserContextEntity } from 'src/schema/schema';
import { CommentActions } from '../../comment/state/comment.actions';
import { RatingActions } from '../state/rating.actions';

interface DialogData {
  rating: number;
  user: Maybe<UserContextEntity>;
  eventId?: Maybe<string>;
  organisationId?: Maybe<string>;
  articleId?: Maybe<string>;
}

@Component({
  selector: 'app-save-rating-dialog',
  templateUrl: './save-rating-dialog.component.html',
  styleUrls: ['./save-rating-dialog.component.scss'],
})
export class SaveRatingDialogComponent {

  public content?: string;

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<SaveRatingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  showIcon(index: number, rating: number): IconPrefix {
    return index > rating ? 'fas' : 'far';
  }

  onSubmit() {

    switch (true) {
      case !!this.data.eventId:
        this.store.dispatch(RatingActions.saveEventRating({
          event: { id: this.data.eventId },
          userContext: {id: this.data.user?.id, uploads: this.data.user?.uploads},
          score: this.data.rating,
        }))

        if (this.content) {
          this.store.dispatch(CommentActions.saveEventComment({
            content: this.content,
            event: { id: this.data.eventId },
            userContext: {id: this.data.user?.id},
            
          }));
        }
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

