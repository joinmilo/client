import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from '../../state/portal-friends.actions';

@Component({
  selector: 'app-portal-add-friends',
  templateUrl: './portal-add-friends.component.html',
  styleUrls: ['./portal-add-friends.component.scss'],
})
export class PortalAddFriendsComponent implements OnInit{

  public allPortalUsers: Maybe<UserContextEntity>[] = [];
  public selectedPortalUsers: Maybe<UserContextEntity>[] = [];
  public value = '';
  private currentUser?: Maybe<UserContextEntity>;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public users: Maybe<UserContextEntity>[],
    public store: Store) { 
    }

  public ngOnInit(): void {
    this.allPortalUsers = this.users;

    this.store.select(selectCurrentUser).subscribe(user => this.currentUser = user);
  }
 
  public filterUsers(value: string): void{
    this.store.dispatch(PortalFriendsActions.getUsers(value))
  }

  public toggleSelectedUser(user: Maybe<UserContextEntity>, checked: boolean): void {
    checked
      ? this.selectedPortalUsers?.push(user)
      : this.selectedPortalUsers = this.selectedPortalUsers?.filter(item => item !== user); 
  }

  public sendFriendRequest() {
    this.selectedPortalUsers.map(user => ({
      accepted: false,
      addressee: {id: user?.id},
      requester: {id: this.currentUser?.id},
    }))
  }
}