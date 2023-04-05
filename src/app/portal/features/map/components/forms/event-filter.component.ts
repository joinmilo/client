import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {take, takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectEventFilter, selectEventFilterOptions} from '../../state/map.selector';
import {FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-portal-map-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./filters.scss']
})
export class MapEventFilterComponent implements OnInit, OnDestroy {

  public destroy = new Subject<boolean>();

  public options = this.store.select(selectEventFilterOptions);

  public form = new FormGroup({
    targetGroupId: new FormControl<string|null>(null),
    categoryId: new FormControl<string|null>(null),
    // TODO: daterange
    // TODO: day times
    // suburbId: new FormControl<string|null>(null),
    // onlyFreeOfCharge: new FormControl<boolean>(false),
    // showPastEvents: new FormControl<boolean>(false)
  });

  constructor(
    private store: Store,
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
      targetGroupId: input?.targetGroupId || ""
    }
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete()
  }
}
