import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
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
    private router: Router,
    private store: Store) { }

  public saveComment(content: string): void {
    this.store.select(selectCurrentUser)
      .pipe(take(1))
      .subscribe(user => user?.id
        ? this.store.dispatch(PortalEventDetailsActions.saveEventComment({
            content,
          }))
        : this.router.navigate(['/user', 'login-required']))
  }
}