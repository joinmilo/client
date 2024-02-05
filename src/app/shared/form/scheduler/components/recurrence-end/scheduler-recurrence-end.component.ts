import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RadioButtonInput } from 'ngx-cinlib/forms/radio-button';
import { AppValidators } from 'ngx-cinlib/forms/validators';
import { Subject, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { SchedulerActions } from '../../state/scheduler.actions';
import { selectColumns, selectInitRecurrenceEnd, selectLefthandColumns, selectNumberColumns } from '../../state/scheduler.selectors';
import { RecurrenceEnd } from '../../typings/scheduler';

@Component({
  selector: 'app-scheduler-recurrence-end',
  templateUrl: './scheduler-recurrence-end.component.html',
  styleUrls: ['./scheduler-recurrence-end.component.scss'],
})
export class SchedulerRecurrenceEndComponent implements OnDestroy {

  public form = this.fb.group({
    recurrenceEnd: [undefined as Maybe<RecurrenceEnd>],
    recurrenceUntil: [undefined as Maybe<Date>],
    recurrenceAfterTimes: [undefined as Maybe<number>, [Validators.min(0)]],
  }, {
    validators: [
      AppValidators.ifMatchValueOtherFilled('recurrenceEnd', 'until', 'recurrenceUntil'),
      AppValidators.ifMatchValueOtherFilled('recurrenceEnd', 'after', 'recurrenceAfterTimes'),
    ]
  });

  public columns = this.store.select(selectColumns);
  public leftAssignedColumns = this.store.select(selectLefthandColumns);
  public numberAssignedColumns = this.store.select(selectNumberColumns);

  public recurrenceEndOn: RadioButtonInput<RecurrenceEnd> = {
    label: 'on',
    value: 'until',
  };

  public recurrenceEndAfter: RadioButtonInput<RecurrenceEnd> = {
    label: 'after',
    value: 'after'
  };

  public date = new Date();

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.initEndChanged();
    this.endChanged();
    this.emit();
    this.store.dispatch(SchedulerActions.addError('eitherAfterTimesOrEndDate'));
  }

  private initEndChanged() {
    this.store.select(selectInitRecurrenceEnd)
      .pipe(takeUntil(this.destroy))
      .subscribe(recurrenceEnd => {
        this.form.patchValue({
          recurrenceEnd
        });
        this.setDisableState(recurrenceEnd);
      });
  }

  private endChanged() {
    this.form.controls.recurrenceEnd.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(recurrenceEnd => this.setDisableState(recurrenceEnd));
  }

  private setDisableState(recurrenceEnd: Maybe<string>) {
    switch(recurrenceEnd) {
      case 'until':
        this.form.controls.recurrenceAfterTimes.disable();
        this.form.controls.recurrenceUntil.enable();
        break;
      case 'after':
        this.form.controls.recurrenceAfterTimes.enable();
        this.form.controls.recurrenceUntil.disable();
        break;
    }
  }

  private emit(): void {
    this.form.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(values => {
        if (this.form.valid) {
          if (values.recurrenceEnd === 'until'
              && values.recurrenceUntil) {
            this.store.dispatch(SchedulerActions.updatedRecurrenceEndDate(values.recurrenceUntil));
          } else if (values.recurrenceEnd === 'after'
              && values.recurrenceAfterTimes) {
            this.store.dispatch(SchedulerActions.updatedRecurrenceEndAfterTimes(values.recurrenceAfterTimes));
          }
        } else {
          this.store.dispatch(SchedulerActions.addError('eitherAfterTimesOrEndDate'));
        }
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
