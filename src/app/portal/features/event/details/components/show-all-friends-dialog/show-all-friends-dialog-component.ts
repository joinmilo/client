import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-show-all-friends',
  templateUrl: 'show-all-friends-dialog-component.html',
  styleUrls: ['./show-all-friends-dialog-component.scss'],
})
export class ShowAllFriendsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ShowAllFriendsDialogComponent>,
    private Store: Store) { }


}
