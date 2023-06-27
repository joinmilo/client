import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';

interface DialogData {
  rating: number;
}

@Component({
  selector: 'app-save-rating-dialog',
  templateUrl: './save-rating-dialog.component.html',
  styleUrls: ['./save-rating-dialog.component.scss'],
})
export class SaveRatingDialogComponent {

  public form = this.fb.group({
    rating: [0, [Validators.required]],
    content: ['']
  })

  constructor(
    private fb: FormBuilder,
    private store: Store,
    public dialogRef: MatDialogRef<SaveRatingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  showIcon(index: number, rating: number): IconPrefix {
    return index > rating ? 'fas' : 'far';
  }

  onSubmit() {
    this.form.value.rating = this.data.rating;
    this.dialogRef.close(this.form.value);
  }
}

