import {ActivatedRoute} from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {take, takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectDealFilter, selectDealFilterOptions} from '../../state/map.selector';
import {FormBuilder} from '@angular/forms';
import {Subject} from 'rxjs';
import {DealOfferStatus} from '../../constants/map.constants';

@Component({
  selector: 'app-portal-map-deal-filter',
  templateUrl: './deal-filter.component.html',
  styleUrls: ['./filters.scss']
})
export class MapDealFilterComponent implements OnInit, OnDestroy {

  public readonly OfferStatus = DealOfferStatus;

  public destroy = new Subject<boolean>();

  public options = this.store.select(selectDealFilterOptions);

  public form = this.fb.group({
    categoryId: [''],
    suburbId: [''],
    offerStatus: [DealOfferStatus.both]
  });

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.store.select(selectDealFilter).pipe(
      take(1)
    ).subscribe((value) => {
      if (value) {
        this.form.setValue(this.defaults(value))
      }
    });

    this.form.valueChanges.pipe(
      takeUntil(this.destroy),
      tap((value) => {
        this.store.dispatch(MapFeatureActions.setDealFilter(this.defaults(value)));
      })
    ).subscribe();
  }

  defaults(input: typeof this.form.value) {
    return {
      categoryId: input.categoryId || '',
      suburbId: input.suburbId || '',
      offerStatus: input.offerStatus || DealOfferStatus.both
    }
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete()
  }
}
