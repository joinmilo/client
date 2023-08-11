import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
    private fb: FormBuilder) { }

  public onSubmit(): void {
    this.dialogRef.close(this.form.value.content);
  }
}
