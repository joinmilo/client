import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-save-comment',
  templateUrl: './save-comment.component.html',
  styleUrls: ['./save-comment.component.scss']
})
export class SaveCommentComponent{

  @Input()
  currentUser?: Maybe<UserContextEntity>;

  @Output()
  content: EventEmitter<string> = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CommentDialogComponent, {
      width: '32rem',
      enterAnimationDuration,
      exitAnimationDuration,
    }).afterClosed().subscribe((result) => {
      if(result) {
        this.content.emit(result);
      }
    });
  }
}
