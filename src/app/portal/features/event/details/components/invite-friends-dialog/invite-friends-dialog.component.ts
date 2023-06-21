import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/schema/schema';

interface DialogData {
  friends: (Maybe<UserContextEntity> | undefined)[] | undefined;
}

@Component({
  selector: 'app-invite-friends',
  templateUrl: 'invite-friends-dialog.component.html',
  styleUrls: ['./invite-friends-dialog.component.scss'],
})
export class InviteFriendsDialogComponent implements OnInit {

  filteredFriends?: (Maybe<UserContextEntity> | undefined)[] | undefined = [];
  selectedFriends?: (Maybe<UserContextEntity> | undefined)[] | undefined = [];
  value = "";

  constructor(
    public dialogRef: MatDialogRef<InviteFriendsDialogComponent>,
    private Store: Store,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

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
