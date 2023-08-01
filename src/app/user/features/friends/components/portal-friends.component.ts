import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { displayQueryParam } from 'src/app/core/constants/core.constants';
import { RadioInput } from 'src/app/shared/form/radio-button/typings/radio-input';
import { PortalAddFriendsComponent } from './add-friends/portal-add-friends.component';

import { Subject } from 'rxjs';
import { selectFriendRequests, selectFriends, selectSentRequests } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from '../state/portal-friends.actions';
import { selectAllUsers } from '../state/portal-friends.selectors';


@Component({
  selector: 'app-portal-friends',
  templateUrl: './portal-friends.component.html',
  styleUrls: ['./portal-friends.component.scss'],
})
export class PortalFriendsComponent implements OnInit, OnDestroy {

  public displayType = 'allFriends';

  public displayQueryParam = displayQueryParam;

  public inputs: RadioInput[] = [
    {
      icon: ['fas', 'users'],
      label: 'allFriends',
      value: 'allFriends'
    },
    {
      icon: ['fas', 'inbox'],
      label: 'receivedFriendRequests',
      value: 'receivedRequests'
    },
    {
      icon: ['fas', 'square-arrow-up-right'],
      label: 'sentFriendRequests',
      value: 'sentRequests'
    },
  ];

  public friends?:  (Maybe<UserContextEntity> | undefined)[];

  public friendRequests?:  (Maybe<UserContextEntity> | undefined)[];

  public sentRequests?:  (Maybe<UserContextEntity> | undefined)[];

  public allUsers?:  Maybe<UserContextEntity[]>;
  
  constructor(
    public store: Store,
    public dialog: MatDialog
  ) {}

  public value = '';

  public ngOnInit(): void {
    this.store.dispatch(PortalFriendsActions.getUsers())

    this.store.select(selectAllUsers)
      .subscribe(allUsers => this.allUsers = allUsers)

    this.store.select(selectFriends)
      .subscribe(friends => this.friends = friends)

    this.store.select(selectFriendRequests)
      .subscribe(friendRequests => this.friendRequests = friendRequests)

    this.store.select(selectSentRequests)
      .subscribe(sentRequests => this.sentRequests = sentRequests)

  }

  private destroy = new Subject<void>();

public addFriends(): void {
   
  // console.log('Users',this.allUsers);
  // console.log('Friends',this.friends);
  // console.log('Friend Request',this.friendRequests);
  // console.log('Sent Request',this.sentRequests);
  
  const filteredUsers = this.allUsers?.
   filter(user => !this.friends?.some(friend => friend?.id === user?.id))
  .filter(user => this.friendRequests?.some(friendRequest => friendRequest?.id !== user?.id))
  .filter(user => this.sentRequests?.some(sentRequest => sentRequest?.id !== user?.id));
 console.log('Filtered Users:', filteredUsers);

  this.dialog.open(PortalAddFriendsComponent, {
    data: filteredUsers
  });
}


  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}