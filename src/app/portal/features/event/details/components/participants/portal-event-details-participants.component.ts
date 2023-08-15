import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { selectCurrentUser, selectFriendUsers } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { selectAttendingFriends } from '../../state/portal-event-details.selectors';
import { PortalEventDetailsFriendsInviteComponent } from '../friends-invite/portal-event-details-friends-invite.component';
import { PortalEventDetailsFriendsShowComponent } from '../friends-show/portal-event-details-friends-show.component';

@Component({
  selector: 'app-portal-event-details-participants',
  templateUrl: './portal-event-details-participants.component.html',
  styleUrls: ['./portal-event-details-participants.component.scss'],
})
export class PortalEventDetailsParticipantsComponent implements OnInit, OnDestroy {

  public friends?: (Maybe<UserContextEntity> | undefined)[];

  public attendingFriends?: (Maybe<UserContextEntity> | undefined)[];

  public currentUser = this.store.select(selectCurrentUser);

  private destroy = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    private store: Store,) { }

  public ngOnInit(): void {
    this.store.select(selectFriendUsers)
      .subscribe(friends => this.friends = friends);

    this.store.select(selectAttendingFriends)
      .subscribe(attendingFriends => this.attendingFriends = attendingFriends);
  }

  public requireLogin(): void {
    this.store.dispatch(CoreUserActions.requireLogin());
  }

  public showAllFriends(): void {
    this.dialog.open(PortalEventDetailsFriendsShowComponent, {
      data: this.attendingFriends
    });
  }

  public inviteFriends(): void {
    this.dialog.open(PortalEventDetailsFriendsInviteComponent, {
      data: this.friends?.filter(friend =>
        !this.attendingFriends?.includes(friend))
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
