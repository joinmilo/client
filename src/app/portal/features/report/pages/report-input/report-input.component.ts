import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ReportActions, ReportTypeActions } from '../../state/report.actions';
import { ReportTypeEntity } from './../../../../../../schema/schema';
import { selectReportTypes, selectSavedReport } from './../../state/report.selectors';

@Component({
  selector: 'app-report-input',
  templateUrl: './report-input.component.html',
  styleUrls: ['./report-input.component.scss'],
})
export class ReportInputComponent implements OnInit {

  reportForm!: FormGroup;

  public types?= this.store.select(selectReportTypes)
  selectedType?: ReportTypeEntity;

  constructor(
    private store: Store
  ) {
    this.store.dispatch(ReportTypeActions.getReportTypes())
  }

  ngOnInit(): void {
    this.reportForm = new FormGroup({
      'type': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'content': new FormControl(null, Validators.required),
      'captcha': new FormControl(null, Validators.required)
    })
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.store.dispatch(ReportActions.saveReport({
      name: this.reportForm.value.name,
      email: this.reportForm.value.email,
      type: { id: this.selectedType?.id },
      captcha: this.reportForm.value.captcha
    }));

    this.store.select(selectSavedReport)
      .subscribe(report => report?.id && formDirective.resetForm());
  }

  setType(type: ReportTypeEntity) {
    this.selectedType = type;
  }
}
