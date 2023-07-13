import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { dealsFeatureKey, slug } from 'src/app/core/constants/core.constants';
import { DealFilterQueryDefinition } from 'src/app/core/typings/filter-params/deal-filter-param';
import { MarkerDefinition } from 'src/app/shared/map/typings/map';
import { DealEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { PortalDealDetailsActions } from '../state/portal-deal-details.actions';
import { selectDealDetails } from '../state/portal-deal-details.selectors';


@Component({
  selector: 'app-portal-deal-details',
  templateUrl: './portal-deal-details.component.html',
  styleUrls: ['./portal-deal-details.component.scss']
})
export class PortalDealDetailsComponent implements OnInit, OnDestroy {

  public categoryUrl = dealsFeatureKey;

  public categoryQueryParams = DealFilterQueryDefinition.dealCategories;

  public deal?: Maybe<DealEntity>;

  public titleImage?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  public marker?: Maybe<MarkerDefinition>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    console.log("helo");
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalDealDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectDealDetails)),
      takeUntil(this.destroy)
    ).subscribe(deal => {
      this.deal = deal;
      this.titleImage = deal?.uploads?.find(upload => upload?.title)?.media;
      
      this.marker = {
        entity: 'DealEntity',
        data: [deal]
      };

      this.media = deal?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(dealMedia => dealMedia?.media)
        ?.slice(0, 3) as MediaEntity[];
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}