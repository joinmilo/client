import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { Column } from 'src/app/shared/widgets/table/typings/table';
import { slug } from '../../../../../../../core/constants/queryparam.constants';
import { DealAdminDetailsFavoritesActions } from '../state/deal-admin-details-favorites.actions';
import { selectDealAdminDetailsFavorites } from '../state/deal-admin-details-favorites.selectors';




@Component({
  selector: 'app-deal-admin-details-favorites',
  templateUrl: './deal-admin-details-favorites.component.html',
  styleUrls: ['./deal-admin-details-favorites.component.scss']
})
export class DealAdminDetailsFavoritesComponent implements OnInit, OnDestroy {

  public favorites = this.store.select(selectDealAdminDetailsFavorites);

  public slug?: Maybe<string>;

  private destroy = new Subject<void>();

  public columns: Column<UserContextEntity>[] = [
    {
      field: 'user.firstName',
      label: 'firstName',
      sort: true,
    },
    {
      field: 'user.lastName',
      label: 'lastName',
      sort: true,
    },
    {
      field: 'user.email',
      label: 'email',
      sort: true,
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.slug = params[slug],
        this.updateParams(
          params[slug],
          {
            startDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
            endDate: new Date()
          },)
    }
    )
  }

  public updateParams(slug?: Maybe<string>, period?: Period, params?: FilterSortPaginateInput) {
    this.store.dispatch(DealAdminDetailsFavoritesActions.updateParams(this.slug ?? slug, period, params));
  }

  public initPeriod: Period = {
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date()
  }
  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}