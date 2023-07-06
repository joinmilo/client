import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { selectCurrentUser, selectFriends } from '../../../../../../core/state/core.selectors';
import { selectAttendingFriends } from '../../state/portal-event-details.selectors';
import { PortalEventDetailsInviteFriendsComponent } from '../invite-friends/portal-event-details-invite-friends.component';
import { ShowFriendsComponent } from '../show-friends/show-friends.component';

@Component({
  selector: 'app-portal-event-details-participants',
  templateUrl: './portal-event-details-participants.component.html',
  styleUrls: ['./portal-event-details-participants.component.scss'],
})
export class PortalEventDetailsParticipantsComponent implements OnInit, OnDestroy {

  public friends?: (Maybe<UserContextEntity> | undefined)[] | undefined;

  public attendingFriends?: (Maybe<UserContextEntity> | undefined)[] | undefined;

  public currentUser = this.store.select(selectCurrentUser);

  private destroy = new Subject<void>();

  constructor(public dialog: MatDialog, private store: Store) { }

  public ngOnInit(): void {
    this.store.select(selectFriends)
      .subscribe(friends => this.friends = friends);

    this.store.select(selectAttendingFriends)
      .subscribe(attendingFriends => this.attendingFriends = attendingFriends);
  }

  public showAllFriends(): void {
    this.dialog.open(ShowFriendsComponent, {
      data: this.attendingFriends
    });
  }

  public inviteFriends(): void {
    this.dialog.open(PortalEventDetailsInviteFriendsComponent, {
      data: this.friends?.filter(friend =>
        !this.attendingFriends?.includes(friend))
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
