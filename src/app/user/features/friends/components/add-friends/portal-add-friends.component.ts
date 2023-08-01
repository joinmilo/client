import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
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


  constructor(
    @Inject(MAT_DIALOG_DATA)
    public users: Maybe<UserContextEntity>[],
    public store: Store) { 
    }

  public ngOnInit(): void {
    this.allPortalUsers = this.users;
  }

  // public filterUsers(value: string): void{
  //   this.allPortalUsers = 
  //     this.users?.filter(user => (user?.user?.firstName + '' + user?.user?.lastName)
  //       ?.toLowerCase().includes(value.toLowerCase().replace(/\s/g, '')));

  //   this.store.dispatch(PortalFriendsActions.getUsers({filter: this.value}))
  // }
  
  public filterUsers(value: string): void{
    this.store.dispatch(PortalFriendsActions.getUsers())
  }

  public toggleSelectedFriend(user: Maybe<UserContextEntity>, checked: boolean): void {
    checked
      ? this.selectedPortalUsers?.push(user)
      : this.selectedPortalUsers = this.selectedPortalUsers?.filter(item => item !== user); 
  }

}