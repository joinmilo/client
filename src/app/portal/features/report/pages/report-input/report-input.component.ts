import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, map, Subject, takeUntil } from 'rxjs';
import { hCaptchaSitekeyConfig } from 'src/app/core/constants/core.constants';
import { selectConfiguration } from 'src/app/core/state/core.selectors';
import { ReportTypeEntity } from 'src/schema/schema';
import { ReportActions } from '../../state/report.actions';
import { selectReportTypes, selectSavedReport } from '../../state/report.selectors';

@Component({
  selector: 'app-report-input',
  templateUrl: './report-input.component.html',
  styleUrls: ['./report-input.component.scss'],
})
export class ReportInputComponent implements OnDestroy {

  public form = this.fb.group({
    type: [{} as ReportTypeEntity, [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    content: ['', [Validators.required]],
    captchaToken: ['', [Validators.required]]
  });

  private destroy = new Subject<void>();

  public sitekey = this.store.select(selectConfiguration(hCaptchaSitekeyConfig))
    .pipe(
      filter(config => !!config?.value),
      map(config => config?.value as string),
    );

  public types = this.store.select(selectReportTypes);

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {
    this.store.dispatch(ReportActions.getReportTypes());
  }

  onSubmit(formDirective: FormGroupDirective) {
    console.log(this.form.value.content);
    this.store.dispatch(ReportActions.saveReport({
      //TODO translatables content
      name: this.form.value.name,
      email: this.form.value.email,
      type: {
        id: this.form.value.type?.id
      },
      captchaToken: this.form.value.captchaToken
    }));
    this.store.select(selectSavedReport)
      .pipe(takeUntil(this.destroy))
      .subscribe(report => report?.id && formDirective.resetForm());
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
