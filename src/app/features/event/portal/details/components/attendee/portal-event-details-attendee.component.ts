import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EventAttendeeEntity, Maybe } from 'src/app/core/api/generated/schema';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';
import { selectEventAttendeeConfiguration, selectEventUserAttendee } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details-attendee',
  templateUrl: './portal-event-details-attendee.component.html',
  styleUrls: ['./portal-event-details-attendee.component.scss']
})
export class PortalEventDetailsAttendeeComponent implements OnDestroy {

  public approvedAttendees?: Maybe<Maybe<EventAttendeeEntity>[]>;
  public currentUserAttendee?: Maybe<EventAttendeeEntity>;
  public maxAttendees?: Maybe<number>

  private destroy = new Subject<void>();

  constructor(private store: Store) {

    this.store.select(selectEventUserAttendee)
      .pipe(takeUntil(this.destroy))
      .subscribe(attendee => this.currentUserAttendee = attendee);

    this.store.select(selectEventAttendeeConfiguration)
      .pipe(takeUntil(this.destroy))
      .subscribe(configuration => {
        this.approvedAttendees = configuration?.attendees?.filter(attendee => attendee?.approved)
        this.maxAttendees = configuration?.maxAttendees;
      });
  }

  public attend(): void {
    this.store.dispatch(PortalEventDetailsActions.attendEvent());
  }

  public cancel(): void {
    this.store.dispatch(PortalEventDetailsActions.cancelAttendeeRegistration());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
