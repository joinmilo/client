import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Maybe, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-show-friends',
  templateUrl: 'show-friends.component.html',
  styleUrls: ['./show-friends.component.scss'],
})
export class ShowFriendsComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public friends?: Maybe<UserContextEntity>[]) { }

}
