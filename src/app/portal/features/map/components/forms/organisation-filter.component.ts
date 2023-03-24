import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {take, takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectOrganisationFilter, selectOrganisationFilterOptions} from '../../state/map.selector';
import {FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-portal-map-organisations-filter',
  templateUrl: './organisation-filter.component.html',
  styleUrls: ['./filters.scss']
})
export class MapOrganisationsFilterComponent implements OnInit, OnDestroy {

  public destroy = new Subject<boolean>();

  public options = this.store.select(selectOrganisationFilterOptions);

  public form = new FormGroup({
    suburbId: new FormControl<string|null>(null),
    rating: new FormControl<number|null>(null),
  });

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.select(selectOrganisationFilter).pipe(
      take(1)
    ).subscribe((value) => {
      if (value) {
        this.form.setValue(this.defaults(value))
      }
    });

    this.form.valueChanges.pipe(
      takeUntil(this.destroy),
      tap((value) => {
        this.store.dispatch(MapFeatureActions.setOrganisationFilter({
          suburbId: value.suburbId || "",
          // TODO: Add rating when backend is ready
        }));
      })
    ).subscribe();
  }

  defaults(input: typeof this.form.value) {
    return {
      suburbId: input.suburbId || "",
      rating: input.rating || null
    }
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete()
  }
}
