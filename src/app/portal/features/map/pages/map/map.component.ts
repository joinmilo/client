import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectEventFilterOptions, selectEvents} from '../../state/map.selector';
import {FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-portal-map-page',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapPageComponent implements OnInit, OnDestroy {

  public param = this.route.queryParams.pipe(
    tap(params => console.log('params', params)),
    map(params => params['q'])
  );

  public destroy = new Subject<boolean>();

  public eventFilterOptions = this.store.select(selectEventFilterOptions);

  public events = this.store.select(selectEvents);

  public eventFilterForm = new FormGroup({
    targetGroupId: new FormControl<string|null>(null),
    suburbId: new FormControl<string|null>(null),
    categoryId: new FormControl<string|null>(null),
    // TODO: daterange
    // TODO: day times
    onlyFreeOfCharge: new FormControl<boolean>(false),
    showPastEvents: new FormControl<boolean>(false)
  })

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(MapFeatureActions.getFilterOptions())
    this.eventFilterForm.valueChanges.pipe(
      takeUntil(this.destroy),
      tap((value) => {
        const cleaned = Object.fromEntries(Object.entries(value).filter(([, value]) => !!value));
        this.store.dispatch(MapFeatureActions.setEventFilter(cleaned));
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete()
  }

}
