import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, filter, takeUntil } from 'rxjs';
import { ReportTypeEntity } from 'src/schema/schema';
import { ReportPageFeatureActions } from '../state/report-page-feature.actions';
import { selectReportTypes, selectSavedReport } from '../state/report-page-feature.selectors';

@Component({
  selector: 'app-report-page-feature',
  templateUrl: './report-page-feature.component.html',
  styleUrls: ['./report-page-feature.component.scss']
})
export class ReportPageFeatureComponent implements OnDestroy {

  public form = this.fb.group({
    type: [{} as ReportTypeEntity, [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    content: ['', [Validators.required]],
  });

  public types = this.store.select(selectReportTypes);

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {
    this.store.dispatch(ReportPageFeatureActions.getReportTypes());
  }

  public onSubmit(captchaToken: string, formDirective: FormGroupDirective) {
    this.store.dispatch(ReportPageFeatureActions.saveReport({
      //TODO translatables content
      name: this.form.value.name,
      email: this.form.value.email,
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
        this.store.dispatch(ReportPageFeatureActions.reset());
      });
  }

  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
