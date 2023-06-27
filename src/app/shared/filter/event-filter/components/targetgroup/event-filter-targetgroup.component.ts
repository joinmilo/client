import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { EventFilterQueryDefinition } from 'src/app/core/typings/filter-params/event-filter-param';
import { Maybe } from 'src/schema/schema';
import { EventFilterActions } from '../../state/event-filter.actions';
import { selectTargetGroups } from '../../state/event-filter.selectors';

@Component({
  selector: 'app-event-filter-targetgroup',
  templateUrl: './event-filter-targetgroup.component.html',
  styleUrls: ['./event-filter-targetgroup.component.scss']
})
export class EventFilterTargetgroupComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = EventFilterQueryDefinition.targetGroups;

  @Output()
  public valueChanged = new EventEmitter<Maybe<string[]> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  public targetGroups = this.store.select(selectTargetGroups).pipe(
    tap(targetGroups => !targetGroups?.length
      && this.store.dispatch(EventFilterActions.getTargetGroups()))
  );

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
        const value = typeof params[this.queryParamKey] === 'string'
          ? [params[this.queryParamKey]]
          : params[this.queryParamKey];

        this.control.setValue(value, {
          emitEvent: false,
        });
      });
  }

  private watchValueChange(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((ids: Maybe<string[]>) => {
        if (this.queryParamKey) {
          this.router.navigate([], {
            
            queryParams: {
              [this.queryParamKey]: ids
            },
            queryParamsHandling: 'merge',
          });
        }

        this.valueChanged.emit(ids);
        this.store.dispatch(EventFilterActions.selectedTargetGroups(ids));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
  
}
