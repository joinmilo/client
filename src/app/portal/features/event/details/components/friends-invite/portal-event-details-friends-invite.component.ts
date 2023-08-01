import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Maybe, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-event-details-friends-invite',
  templateUrl: 'portal-event-details-friends-invite.component.html',
  styleUrls: ['./portal-event-details-friends-invite.component.scss'],
})
export class PortalEventDetailsFriendsInviteComponent implements OnInit {

  public filteredFriends: Maybe<UserContextEntity>[] = [];
  public selectedFriends: Maybe<UserContextEntity>[] = [];
  public value = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public friends: Maybe<UserContextEntity>[]) { }

  public ngOnInit(): void {
    this.filteredFriends = this.friends;
  }

  public filterFriends(value: string): void {
    this.filteredFriends =
      this.friends?.filter(friend => (friend?.user?.firstName + '' + friend?.user?.lastName)
        ?.toLowerCase().includes(value.toLowerCase().replace(/\s/g, '')));
  }

  public toggleAllFriends(checked: boolean) {
    this.selectedFriends = checked
      ? this.friends 
      : [];
  }

  public toggleSelectedFriend(friend: Maybe<UserContextEntity>, checked: boolean): void {
    checked
      ? this.selectedFriends?.push(friend)
      : this.selectedFriends = this.selectedFriends?.filter(item => item !== friend); 
  }

  public sendNotification(): void {
    throw new Error('Method not implemented.'); //TODO
  }
}
