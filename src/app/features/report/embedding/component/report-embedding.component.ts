import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CinValidators } from 'ngx-cinlib/forms/validators';
import { Subject, filter, takeUntil } from 'rxjs';
import { ReportTypeEntity } from 'src/app/core/api/generated/schema';
import { ReportEmbeddingActions } from '../state/report-embedding.actions';
import { selectReportTypes, selectSavedReport } from '../state/report-embedding.selectors';

@Component({
  selector: 'app-report-embedding',
  templateUrl: './report-embedding.component.html',
  styleUrls: ['./report-embedding.component.scss']
})
export class ReportEmbeddingComponent implements OnDestroy {

  public form = this.fb.group({
    type: [{} as ReportTypeEntity, [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, CinValidators.email]],
    content: ['', [Validators.required]],
  });

  public types = this.store.select(selectReportTypes);

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {
    this.store.dispatch(ReportEmbeddingActions.getReportTypes());
  }

  public onSubmit(captchaToken: string, formDirective: FormGroupDirective) {
    this.store.dispatch(ReportEmbeddingActions.saveReport({
      //TODO translatables content
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
        this.store.dispatch(ReportEmbeddingActions.reset());
      });
  }

  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
