import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss']
})
export class UserCommentComponent {

  constructor(public dialog: MatDialog){}
}

@Component({
  selector: 'app-user-comment-dialog',
  templateUrl: 'user-comment-dialog.component.html',
})
export class UserCommentDialogComponent {
  constructor(public dialogRef: MatDialogRef<UserCommentDialogComponent>) {}
}
