import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {take, takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectOrganisationFilter, selectOrganisationFilterOptions} from '../../state/map.selector';
import {FormBuilder} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-portal-map-organisation-filter',
  templateUrl: './organisation-filter.component.html',
  styleUrls: ['./filters.scss']
})
export class MapOrganisationsFilterComponent implements OnInit, OnDestroy {

  public destroy = new Subject<boolean>();

  public options = this.store.select(selectOrganisationFilterOptions);

  public form = this.fb.group({
    suburbId: [''],
    rating: ['']
  });

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder
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
        this.store.dispatch(MapFeatureActions.setOrganisationFilter(this.defaults(value)));
      })
    ).subscribe();
  }

  defaults(input: typeof this.form.value) {
    return {
      suburbId: input.suburbId || '',
      rating: input.rating || ''
    }
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete()
  }
}
