import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MediaEntity, PageEntity } from 'src/app/core/api/generated/schema';
import { platformUrlConfig } from 'src/app/core/constants/configuration.constants';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { selectConfiguration } from 'src/app/core/state/selectors/core.selectors';
import { AdminSettingsPageDetailsLandingActions } from '../state/admin-settings-page-details-landing.actions';
import { selectAdminSettingsPageDetailsLanding } from '../state/admin-settings-page-details-landing.selectors';

@Component({
  selector: 'app-settings-page-details-landing',
  templateUrl: './admin-settings-page-details-landing.component.html',
  styleUrls: ['./admin-settings-page-details-landing.component.scss']
})
export class AdminSettingsPageDetailsLandingComponent implements OnInit, OnDestroy {
  
  public expanded = false;

  public media?: Maybe<MediaEntity[]>;

  public page?: Maybe<PageEntity>;

  public platformUrl = this.store.select(selectConfiguration(platformUrlConfig));

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(AdminSettingsPageDetailsLandingActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectAdminSettingsPageDetailsLanding)),
      takeUntil(this.destroy)
    ).subscribe(page => {
      this.page = page
      this.page?.embeddings?.sort((a,b) => a?.order! - b?.order!);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}