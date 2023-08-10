import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from '../../state/portal-friends.actions';
import { selectFilteredUsers } from '../../state/portal-friends.selectors';

@Component({
  selector: 'app-portal-add-friends',
  templateUrl: './portal-add-friends.component.html',
  styleUrls: ['./portal-add-friends.component.scss'],
})
export class PortalAddFriendsComponent implements OnInit {

  public filteredUsers?: Maybe<UserContextEntity[]>;
  public selectedPortalUsers: Maybe<UserContextEntity>[] = [];
  public value = '';
  private currentUser?: Maybe<UserContextEntity>;

  constructor(
    public store: Store) {
  }

  public ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe(user => this.currentUser = user);

    this.store.select(selectFilteredUsers).subscribe(filteredUsers => this.filteredUsers = filteredUsers?.slice(0, 5));
  }

  public filterUsers(value: string): void {
    value.length > 0 && this.store.dispatch(PortalFriendsActions.getUsers(value));
  }

  public toggleSelectedUser(user: Maybe<UserContextEntity>, checked: boolean): void {
    checked
      ? this.selectedPortalUsers?.push(user)
      : this.selectedPortalUsers = this.selectedPortalUsers?.filter(item => item !== user);
  }

  public sendFriendRequest() {
    this.store.dispatch(PortalFriendsActions.sendFriendRequests(
      this.selectedPortalUsers.map(user => ({
        accepted: false,
        addressee: { id: user?.id },
        requester: { id: this.currentUser?.id },
      }))
    ))
  }
}