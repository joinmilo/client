import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-report-page-feature-captcha.component',
  templateUrl: 'report-page-feature-captcha.component.html',
})
export class ReportPageFeatureCaptchaComponent implements OnDestroy {

  public form = this.fb.group({
    captchaToken: ['', [Validators.required]],
  });

  private destroy = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<ReportPageFeatureCaptchaComponent>,
    private fb: FormBuilder,
  ) {
    this.form.get('captchaToken')?.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(token => token && this.dialogRef.close(token));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }



}