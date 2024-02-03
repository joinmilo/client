import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DealEntity, Maybe } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { favoritesRoute, searchRoute, visitorsRoute } from '../../../constants/deal-admin-details.constants';
import { DealAdminDetailsLayoutActions } from '../state/deal-admin-details-layout.actions';
import { selectDealAdminDetailsLayout } from '../state/deal-admin-details-layout.selectors';

@Component({
  selector: 'app-deal-admin-details-layout',
  templateUrl: './deal-admin-details-layout.component.html',
  styleUrls: ['./deal-admin-details-layout.component.scss']
})
export class DealAdminDetailsLayoutComponent implements OnInit, OnDestroy {

  public deal?: Maybe<DealEntity>;

  private destroy = new Subject<void>();

  public inputs: RadioCardInput[] = [
    {
      icon: ['fas', 'magnifying-glass'],
      label: 'overview',
      value: '',
    },
    {
      icon: ['far', 'eye'],
      label: 'pageVisitors',
      value: visitorsRoute
    },
    {
      icon: ['fab', 'google'],
      label: 'googleSearch',
      value: searchRoute
    },
    {
      icon: ['far', 'heart'],
      label: 'favorites',
      value: favoritesRoute
    },
  ];

  public initValue = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(DealAdminDetailsLayoutActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectDealAdminDetailsLayout)),
      takeUntil(this.destroy)
    ).subscribe(deal => {
      const lastUrlSegment = this.router.url.split('?')[0].split('/').pop();
      if (lastUrlSegment && deal && lastUrlSegment !== deal?.slug) {
        this.initValue = lastUrlSegment;
      }

      this.deal = deal;
    });
  }

  public route(route: string): void {
    this.router.navigate([`./${route}`], { relativeTo: this.activatedRoute });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}