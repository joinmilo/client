import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, combineLatestWith, takeUntil } from 'rxjs';
import { selectCurrenUser } from 'src/app/core/state/core.selectors';
import { EventEntity, Maybe, UserContextEntity } from 'src/schema/schema';
import { selectEventDetails } from '../../state/portal-event-details.selectors';
import { ShowAllFriendsDialogComponent } from '../show-all-friends-dialog/show-all-friends-dialog-component';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
})
export class EventParticipantsComponent implements OnInit, OnDestroy {

  private currentUser?: Maybe<UserContextEntity> | undefined;

  private event?: Maybe<EventEntity> | undefined;

  private destroy = new Subject<void>();

  public friends?: (Maybe<UserContextEntity> | undefined)[] | undefined;

  constructor(private store: Store, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.select(selectEventDetails)
      .pipe(
        combineLatestWith(this.store.select(selectCurrenUser)),
        takeUntil(this.destroy)
      )
      .subscribe(([event, user]) => {
        this.event = event;
        this.currentUser = user;

        if (event && user) {
          const attendees = this.event?.attendees?.filter((attendee) => attendee?.approved)
            .map((attendee) => attendee?.userContext);
          const requester = this.currentUser?.friendRequester?.filter((requester) => requester?.accepted)
            .map((requester) => requester?.addressee);
          const addressee = this.currentUser?.friendAddressee?.filter((addressee) => addressee?.accepted)
            .map((addressee) => addressee?.requester);

          if (attendees && (requester || addressee)) {
            const friends = (requester || []).concat(addressee || []);
            this.findAttendingFriends(attendees, friends);
          }
        }
      });
  }

  addFriends() {
    if (this.currentUser !== null && this.currentUser !== undefined) {
      // TODO: add Friends logic
    }
    else {
      this.router.navigate(['/user', 'register'])
    }
  }

  findAttendingFriends(
    attendees: (Maybe<UserContextEntity> | undefined)[] | undefined,
    friends: (Maybe<UserContextEntity> | undefined)[] | undefined) {
    if (attendees && friends) {
      this.friends = attendees.filter((attendee) =>
        friends.some((friend) => friend?.id === attendee?.id)
      );
    }
  }

  openAllFriendsDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ShowAllFriendsDialogComponent, {
      width: '32rem',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        friends: this.friends 
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
