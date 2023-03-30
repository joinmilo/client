import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ConfigurationEntity, ReportTypeEntity } from '../../../../../../schema/schema';
import { ReportActions, ReportTypeActions } from '../../state/report.actions';
import { selectConfiguration, selectReportTypes, selectSavedReport } from '../../state/report.selectors';

@Component({
  selector: 'app-report-input',
  templateUrl: './report-input.component.html',
  styleUrls: ['./report-input.component.scss'],
})
export class ReportInputComponent implements OnInit {

  reportForm!: FormGroup;

  public types?= this.store.select(selectReportTypes)
  selectedType?: ReportTypeEntity;

  configuration$?: Observable<ConfigurationEntity | undefined>;
  configurationSubscription?: Subscription;
  sitekey?: string;

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) {
    this.store.dispatch(ReportTypeActions.getReportTypes());
    this.configuration$ = this.store.select(selectConfiguration);
  }

  ngOnInit(): void {
    this.configurationSubscription = this.configuration$?.subscribe(configuration => { this.sitekey = configuration?.value as string })
    console.log(this.sitekey);

    this.reportForm = this.fb.group({
      type: [null, [Validators.required]],
      name: [null, [Validators.required]],
      email: new FormControl(null, [Validators.required, Validators.email]),
      content: new FormControl(null, Validators.required),
      captchaToken: new FormControl(null, Validators.required)
    })
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.store.dispatch(ReportActions.saveReport({
      name: this.reportForm.value.name,
      email: this.reportForm.value.email,
      type: { id: this.selectedType?.id },
      captchaToken: this.reportForm.value.captchaToken
    }));

    this.store.select(selectSavedReport)
      .subscribe(report => report?.id && formDirective.resetForm());
  }

  setType(type: ReportTypeEntity) {
    this.selectedType = type;
  }
}
