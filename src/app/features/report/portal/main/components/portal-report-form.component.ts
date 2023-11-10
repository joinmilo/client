import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, filter, takeUntil } from 'rxjs';
import { ReportTypeEntity } from 'src/app/core/api/generated/schema';
import { AppValidators } from 'src/app/core/validators/validators';
import { ReportActions } from '../state/report.actions';
import { selectReportTypes, selectSavedReport } from '../state/report.selectors';

@Component({
  selector: 'app-portal-report-form',
  templateUrl: './portal-report-form.component.html',
  styleUrls: ['./portal-report-form.component.scss'],
})
export class PortalReportFormComponent implements OnDestroy {

  public form = this.fb.group({
    type: [{} as ReportTypeEntity, [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, AppValidators.email()]],
    content: ['', [Validators.required]],
  });

  private destroy = new Subject<void>();

  public types = this.store.select(selectReportTypes);

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {
    this.store.dispatch(ReportActions.getReportTypes());
  }

  public onSubmit(captchaToken: string, formDirective: FormGroupDirective) {
    this.store.dispatch(ReportActions.saveReport({
      name: this.form.value.name,
      email: this.form.value.email,
      content: this.form.value.content,
      type: {
        id: this.form.value.type?.id
      },
      captchaToken
    }));
    
    this.store.select(selectSavedReport)
      .pipe(
        filter(report => !!report?.id),
        takeUntil(this.destroy)
      )
      .subscribe(() => {
        formDirective.resetForm();
        this.store.dispatch(ReportActions.reset());
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
