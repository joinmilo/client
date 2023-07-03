import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { EventEntity, UserContextEntity } from 'src/schema/schema';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';

@Component({
  selector: 'app-portal-event-attendee',
  templateUrl: './portal-event-attendee.component.html',
  styleUrls: ['./portal-event-attendee.component.scss']
})
export class PortalEventAttendeeComponent {

  @Input()
  event?: Maybe<EventEntity> | undefined;

  @Input()
  currentUser?: Maybe<UserContextEntity> | undefined;

  constructor(private store: Store, private router: Router) { }

  attendEvent() {
    if (this.currentUser !== null && this.currentUser !== undefined) {
      this.store.dispatch(PortalEventDetailsActions.saveAttendee({
        event: { id: this.event?.id },
        userContext: { id: this.currentUser.id },
        approved: !this.event?.attendeeConfiguration?.approval
      }));
    }
    else {
      this.router.navigate(['/user', 'register'])
    }
  }

  cancelRegistration() {
    const id = this.currentUser?.attendee
      ?.filter(attendee => attendee?.event?.id == this.event?.id)[0]?.id;

    if (id) {
      this.store.dispatch(PortalEventDetailsActions.deleteAttendee(
        id
      ));
    }
  }
}
