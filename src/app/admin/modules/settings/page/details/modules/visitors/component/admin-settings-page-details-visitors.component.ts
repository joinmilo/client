import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { AdminSettingsPageDetailsVisitorsActions } from '../state/admin-settings-page-details-visitors.actions';
import { selectVisitorsStatistics } from '../state/admin-settings-page-details-visitors.selectors';

@Component({
  selector: 'app-settings-page-details-visitors',
  templateUrl: './admin-settings-page-details-visitors.component.html',
  styleUrls: ['./admin-settings-page-details-visitors.component.scss']
})
export class AdminSettingsPageDetailsVisitorsComponent implements OnInit {
  
  public data = this.store.select(selectVisitorsStatistics);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(
      map(params => params[slug]),
      take(1)
    ).subscribe(slug => this.store.dispatch(AdminSettingsPageDetailsVisitorsActions.setSlug(slug)));
  }

  public updateParams(params: AnalyticsParams) {
    this.store.dispatch(AdminSettingsPageDetailsVisitorsActions.updateParams(params));
  }
}