import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { Feedback, FeedbackType } from '../../typings/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {

  public critical = FeedbackType.Critical;
  public error = FeedbackType.Error;
  public info = FeedbackType.Info;
  public success = FeedbackType.Success;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public feedback: Feedback,
    public ref: MatSnackBarRef<FeedbackComponent>,
  ) { }
}
