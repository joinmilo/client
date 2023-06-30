import {Component, OnDestroy, OnInit} from '@angular/core';
import {take, takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectEventFilter, selectEventFilterOptions} from '../../state/map.selector';
import {FormBuilder} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-portal-map-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./filters.scss']
})
export class MapEventFilterComponent implements OnInit, OnDestroy {

  public destroy = new Subject<boolean>();

  public options = this.store.select(selectEventFilterOptions);

  public form = this.fb.group({
    targetGroupId: [''],
    categoryId: [''],
    suburbId: [''],
    showOnlyAdmissionFree: [false],
    showPastEvents: [false],
    dateRange: this.fb.group({
      start: this.fb.control<Date | null>(null),
      end: this.fb.control<Date | null>(null)
    })
  })

  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.store.select(selectEventFilter).pipe(
      take(1),
    ).subscribe((value) => {
      if (value) {
        this.form.setValue(this.defaults(value))
      }
    });

    this.form.valueChanges.pipe(
      takeUntil(this.destroy),
      tap((value) => this.store.dispatch(MapFeatureActions.setEventFilter(this.defaults(value))))
    ).subscribe();
  }

  defaults(input: typeof this.form.value) {
    return {
      categoryId: input?.categoryId || "",
      targetGroupId: input?.targetGroupId || "",
      suburbId: input?.suburbId || "",
      showOnlyAdmissionFree: input?.showOnlyAdmissionFree || false,
      showPastEvents: input?.showPastEvents || false,
      dateRange: {
        start: input?.dateRange?.start || null,
        end: input?.dateRange?.end || null
      }
    }
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete()
  }
}
