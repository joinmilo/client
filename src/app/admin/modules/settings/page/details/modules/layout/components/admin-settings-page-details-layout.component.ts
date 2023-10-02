import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, PageEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { RadioCardInput } from 'src/app/shared/form/radio-card/typings/radio-card-input';
import { searchRoute, visitorsRoute } from '../../../constants/admin-settings-page-details.constants';
import { AdminSettingsPageDetailsLayoutActions } from '../state/admin-settings-page-details-layout.actions';
import { selectAdminSettingsPageDetailsLayout } from '../state/admin-settings-page-details-layout.selectors';

@Component({
  selector: 'app-settings-page-details-layout',
  templateUrl: './admin-settings-page-details-layout.component.html',
  styleUrls: ['./admin-settings-page-details-layout.component.scss']
})
export class AdminSettingsPageDetailsLayoutComponent implements OnInit, OnDestroy {

  public page?: Maybe<PageEntity>;

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
  ];

  public initValue = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(AdminSettingsPageDetailsLayoutActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectAdminSettingsPageDetailsLayout)),
      takeUntil(this.destroy)
    ).subscribe(page => {
      const lastUrlSegment = this.router.url.split('?')[0].split('/').pop();
      if (lastUrlSegment && page && lastUrlSegment !== page?.slug) {
        this.initValue = lastUrlSegment;
      }

      this.page = page;
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