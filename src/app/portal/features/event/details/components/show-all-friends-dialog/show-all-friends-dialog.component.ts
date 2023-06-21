import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/schema/schema';

interface DialogData {
  friends: (Maybe<UserContextEntity> | undefined)[] | undefined;
}

@Component({
  selector: 'app-show-all-friends',
  templateUrl: 'show-all-friends-dialog.component.html',
  styleUrls: ['./show-all-friends-dialog.component.scss'],
})
export class ShowAllFriendsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ShowAllFriendsDialogComponent>,
    private Store: Store,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

}
