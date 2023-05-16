import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ArticleEntity, EventEntity, OrganisationEntity } from 'src/schema/schema';

@Component({
  selector: 'app-comment-button',
  templateUrl: './comment-button.component.html',
  styleUrls: ['./comment-button.component.scss']
})
export class CommentButtonComponent {

  @Input()
  entity: Maybe<EventEntity | OrganisationEntity | ArticleEntity>;

  constructor(public dialog: MatDialog){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CommentDialogComponent, {
      width: '32rem',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        entity: this.entity
      }
    });
  }
}

@Component({
  selector: 'app-comment-dialog',
  templateUrl: 'comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss'],
})
export class CommentDialogComponent {

  public form = this.fb.group({
    content: ['', [Validators.required]],
  });

  constructor(
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    private fb: FormBuilder,
    private Store: Store,
    @Inject(MAT_DIALOG_DATA) public data: Maybe<string>) {}

    onSubmit(){
      console.log('hello')
      const entity = this.data;

      if (entity === 'event'){
        //todo
      }
    }
}
