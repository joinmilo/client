import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, OnDestroy, Output, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, take, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ConfirmCancelComponent } from 'src/app/shared/dialogs/confirm-cancel/confirm-cancel.component';
import { ConfirmResetComponent } from 'src/app/shared/dialogs/confirm-reset/confirm-reset.component';
import { FormStepperActions } from '../../state/form-stepper.actions';
import { selectIsDirty, selectIsValid } from '../../state/form-stepper.selectors';
import { FormStepComponent } from '../step/form-step.component';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.scss']
})
export class FormStepperComponent implements AfterViewInit, OnDestroy {

  //TODO: Implement linear mode
  @Input()
  public set linear(linear: boolean) {
    this.store.dispatch(FormStepperActions.setLinear(linear));
  }

  @Input()
  public captchaRequired = false;

  @Output()
  public cancelled = new EventEmitter<void>();

  @Output()
  public saved = new EventEmitter<Maybe<string>>();

  @ContentChildren(FormStepComponent)
  private steps?: QueryList<FormStepComponent>;

  public dirty?: boolean;

  public valid = this.store.select(selectIsValid);

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private dialog: MatDialog,
  ) {
    this.store.select(selectIsDirty)
      .pipe(takeUntil(this.destroy))
      .subscribe(dirty => this.dirty = dirty);
  }

  public ngAfterViewInit(): void {
    this.steps?.forEach((step, index) => step.index = index);
  }

  public save(captchaToken?: string): void {
    this.saved.emit(captchaToken);
  }

  public cancel(): void {
    this.dirty
      ? this.dialog.open(ConfirmCancelComponent).afterClosed()
          .pipe(take(1))
          .subscribe(shouldCancel => shouldCancel
            && this.cancelled.emit())
      : this.cancelled.emit();
  }

  public reset(): void {
    this.dialog.open(ConfirmResetComponent).afterClosed()
      .pipe(take(1))
      .subscribe(shouldReset => shouldReset
        && this.resetSteps())
  }

  private resetSteps(): void {
    this.steps?.forEach(step => step.reset());
    this.store.dispatch(FormStepperActions.stepsReset());
  }

  public ngOnDestroy(): void {
    this.store.dispatch(FormStepperActions.resetState());
    this.destroy.next();
    this.destroy.complete();
  }

}