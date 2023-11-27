import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DealEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { dealsFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { SchemaService } from 'src/app/core/services/schema.service';
import { DealFilterQueryDefinition } from 'src/app/core/typings/filter-params/deal-filter-param';
import { MarkerDefinition } from 'src/app/shared/widgets/map/typings/map';
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

  public mediaTitle?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  public marker?: Maybe<MarkerDefinition>;

  public portalUrl = portalUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private schemaService: SchemaService,
    private store: Store,
    ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalDealDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectDealDetails)),
      takeUntil(this.destroy)
    ).subscribe(deal => {
      this.deal = deal;
      this.mediaTitle = deal?.uploads?.find(upload => upload?.title)?.media;

      this.marker = {
        entity: 'DealEntity',
        data: [deal]
      };

      this.media = deal?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(dealMedia => dealMedia?.media)
        ?.slice(0, 5) as MediaEntity[];
       
        if (this.deal) {
          this.schemaService.setJsonLd(this.renderer, this.deal);
        }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
