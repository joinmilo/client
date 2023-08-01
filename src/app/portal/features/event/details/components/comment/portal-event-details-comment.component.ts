import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';
import { selectEventDetails } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details-comment',
  templateUrl: './portal-event-details-comment.component.html',
  styleUrls: ['./portal-event-details-comment.component.scss']
})
export class PortalEventDetailsCommentComponent {

  public lastComment = this.store.select(selectEventDetails)
    .pipe(map(event => event?.lastEventComment));

  constructor(
    private store: Store) { }

  public saveComment(content: string): void {
    this.store.dispatch(PortalEventDetailsActions.saveComment({
      content,
    }));
  }
}