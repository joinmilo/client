import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { selectAttendingFriends } from '../../state/portal-event-details.selectors';
import { InviteFriendsComponent } from '../invite-friends/invite-friends.component';
import { ShowFriendsComponent } from '../show-friends/show-friends.component';
import { selectCurrentUser, selectFriends } from './../../../../../../core/state/core.selectors';

@Component({
  selector: 'app-event-participants',
  templateUrl: './event-participants.component.html',
  styleUrls: ['./event-participants.component.scss'],
})
export class EventParticipantsComponent implements OnInit{

  public friends?: (Maybe<UserContextEntity> | undefined)[] | undefined;

  public attendingFriends?: (Maybe<UserContextEntity> | undefined)[] | undefined;

  public currentUser = this.store.select(selectCurrentUser);

  constructor(public dialog: MatDialog, private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectFriends).subscribe(friends => this.friends = friends);

    this.store.select(selectAttendingFriends).subscribe(attendingFriends =>
       this.attendingFriends = attendingFriends);
  }

  openAllFriendsDialog(): void {
    this.dialog.open(ShowFriendsComponent, {
      data: this.attendingFriends
    });
  }

  openInviteFriendsDialog(): void {
    this.dialog.open(InviteFriendsComponent, {
      width: 'auto',
      data: {
      friends: this.friends?.filter(friend =>
         !this.attendingFriends?.includes(friend))
      }
    });
  }

}
