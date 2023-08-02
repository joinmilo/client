import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { displayQueryParam } from 'src/app/core/constants/core.constants';
import { RadioInput } from 'src/app/shared/form/radio-button/typings/radio-input';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from '../state/portal-friends.actions';
import { selectAllUsers } from '../state/portal-friends.selectors';
import { PortalAddFriendsComponent } from './add-friends/portal-add-friends.component';

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
  }

  private destroy = new Subject<void>();

  public friendsDialog(): void {  
    this.dialog.open(PortalAddFriendsComponent, {
      autoFocus: false,
      data: this.allUsers?.slice(0,5)
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}