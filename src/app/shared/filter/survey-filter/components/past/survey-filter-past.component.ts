import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { SurveyFilterQueryDefinition } from 'src/app/core/typings/filter-params/survey-filter-param';
import { Maybe } from 'src/schema/schema';
import { SurveyFilterActions } from '../../state/survey-filter.actions';

@Component({
  selector: 'app-survey-filter-past',
  templateUrl: './survey-filter-past.component.html',
  styleUrls: ['./survey-filter-past.component.scss']
})
export class SurveyFilterPastComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = SurveyFilterQueryDefinition.past;

  @Output()
  public valueChanged = new EventEmitter<Maybe<boolean> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    this.watchValueChange();
  }

  public ngOnInit(): void {
    this.queryParamKey && this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        const value = params[this.queryParamKey];
        this.control.setValue(value?.toLowerCase?.() === 'true', {
          emitEvent: false,
        });
      });
  }

  private watchValueChange(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((value: boolean) => {
        if (this.queryParamKey) {
          this.router.navigate([], {
            
            queryParams: {
              [this.queryParamKey]: value
            },
            queryParamsHandling: 'merge',
          });
        }

        this.valueChanged.emit(value);
        this.store.dispatch(SurveyFilterActions.selectedPast(value));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
  
}
