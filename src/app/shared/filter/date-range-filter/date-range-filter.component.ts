import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { Period } from 'src/app/core/typings/period';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ]
})
export class DateRangeFilterComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public disabled?: Maybe<boolean>;

  @Input()
  public queryParamStartKey = FilterQueryDefinition.startDate;

  @Input()
  public queryParamEndKey = FilterQueryDefinition.endDate;

  @Output()
  public valueChanged = new EventEmitter<Period>();

  public form = this.fb.group({
    startDate: [undefined as Maybe<Date> | undefined],
    endDate: [undefined as Maybe<Date> | undefined],
  });

  // This is necessary due to the MatDateRange bug:
  // https://github.com/angular/components/issues/20218
  private emitEvent = true;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.watchValueChange();
  }

  public ngOnInit(): void {
    (this.queryParamStartKey || this.queryParamEndKey) && this.activatedRoute.queryParams
      .pipe(take(1))
      .subscribe(params => {
        this.form.setValue({
          startDate: new Date(params[this.queryParamStartKey] ?? ''),
          endDate: new Date(params[this.queryParamEndKey] ?? '')
        });
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']) {
      if (this.disabled) {
        this.emitEvent = false;
        this.form.controls.startDate.disable();
        this.form.controls.endDate.disable();
        if (this.queryParamStartKey || this.queryParamEndKey) {
          this.router.navigate([], {
            queryParams: {
              [this.queryParamStartKey]: null,
              [this.queryParamEndKey]: null,
            },
            queryParamsHandling: 'merge',
          });
        }
      } else {
        this.form.controls.startDate.enable();
        this.form.controls.endDate.enable();
      }
    }
  }

  private watchValueChange(): void {
    this.form.controls.endDate.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(endDate => {
        if (!isNaN(this.form.value?.startDate?.valueOf() || NaN)
          && !isNaN(endDate?.valueOf() || NaN)
          && this.emitEvent) {
          endDate?.setHours(23, 59, 59, 999);
          this.form.value.startDate?.setHours(0, 0 , 0, 0);
          
          if (this.queryParamStartKey || this.queryParamEndKey) {
            this.router.navigate([], {
              queryParams: {
                [this.queryParamStartKey]: this.form.value.startDate?.toISOString(),
                [this.queryParamEndKey]: endDate?.toISOString(),
              },
              queryParamsHandling: 'merge',
            });
          }

          const period = {
            startDate: this.form.value.startDate,
            endDate,
          } as Period;
  
          this.valueChanged.emit(period);
        }
        this.emitEvent = true;
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
  
}
