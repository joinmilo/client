import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EventFilterQueryDefinition } from 'src/app/core/typings/filter-params/event-filter-param';
import { Maybe } from 'src/schema/schema';
import { EventFilterActions } from '../../state/event-filter.actions';

@Component({
  selector: 'app-event-filter-past',
  templateUrl: './event-filter-past.component.html',
  styleUrls: ['./event-filter-past.component.scss']
})
export class EventFilterPastComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = EventFilterQueryDefinition.past;

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
        this.store.dispatch(EventFilterActions.selectedPast(value));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
  
}
