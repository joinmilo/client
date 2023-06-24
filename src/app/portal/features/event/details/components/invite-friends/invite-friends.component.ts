import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Maybe, UserContextEntity } from 'src/schema/schema';

interface DialogData {
  friends: (Maybe<UserContextEntity> | undefined)[] | undefined;
}

@Component({
  selector: 'app-invite-friends',
  templateUrl: 'invite-friends.component.html',
  styleUrls: ['./invite-friends.component.scss'],
})
export class InviteFriendsComponent implements OnInit {

  filteredFriends?: (Maybe<UserContextEntity> | undefined)[] = [];
  selectedFriends?: (Maybe<UserContextEntity> | undefined)[] = [];
  value = "";

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData) { }

  ngOnInit(): void {
    this.filteredFriends = this.data.friends;
  }

  filterFriends(value: string) {
    this.filteredFriends =
      this.data.friends?.filter(friend => (friend?.user?.firstName + '' + friend?.user?.lastName)
        ?.toLowerCase().includes(value.toLowerCase().replace(/\s/g, '')));
  }

  toggleAllFriends(checked: boolean) {
    if (checked) {
      this.selectedFriends = this.data.friends;
    }
    else {
      this.selectedFriends = [];
    }
  }

  toggleSelectedFriend(friend: Maybe<UserContextEntity> | undefined, checked: boolean) {
    if (checked) {
      this.selectedFriends?.push(friend);
    }
    else {
      this.selectedFriends = this.selectedFriends?.filter(item => item !== friend);
    }
  }

  sendNotification() {
    throw new Error('Method not implemented.');
  }
}
