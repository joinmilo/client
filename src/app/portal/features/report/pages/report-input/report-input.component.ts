import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { captchaValidationApi } from '../../../../../core/constants/core.constants';
import { ReportActions, ReportTypeActions } from '../../state/report.actions';
import { ReportTypeEntity } from './../../../../../../schema/schema';
import { selectReportTypes } from './../../state/report.selectors';

@Component({
  selector: 'app-report-input',
  templateUrl: './report-input.component.html',
  styleUrls: ['./report-input.component.scss'],
})
export class ReportInputComponent implements OnInit {


  reportForm!: FormGroup;
  isHcaptchaCompleted = false;

  public types?= this.store.select(selectReportTypes)
  selectedType?: ReportTypeEntity;

  onVerify(token: string) {
    this.isHcaptchaCompleted = true;
  }

  constructor(
    private store: Store,
    private http: HttpClient,
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

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.reportForm.value.name);
    formData.append('email', this.reportForm.value.email);
    formData.append('h-captcha-response', this.reportForm.value.captcha);
    this.http.post<boolean>(captchaValidationApi, formData).subscribe(
      ok => {
        if (ok) {
          this.store.dispatch(ReportActions.saveReport({
            name: this.reportForm.value.name,
            email: this.reportForm.value.email,
            type: { id: this.selectedType?.id }
          }))
          this.reportForm.reset();
          Object.keys(this.reportForm.controls).forEach(key => {
            this.reportForm.controls[key].setErrors(null)
          });
        }
      }
    );
  }

  setType(type: ReportTypeEntity) {
    this.selectedType = type;
  }
}
