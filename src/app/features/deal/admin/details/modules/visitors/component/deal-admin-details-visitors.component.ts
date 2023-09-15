import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { DealAdminDetailsVisitorsActions } from '../state/deal-admin-details-visitors.actions';
import { selectVisitorsStatistics } from '../state/deal-admin-details-visitors.selectors';

@Component({
  selector: 'app-deal-admin-details-visitors',
  templateUrl: './deal-admin-details-visitors.component.html',
  styleUrls: ['./deal-admin-details-visitors.component.scss']
})
export class DealAdminDetailsVisitorsComponent implements OnInit {
  
  public data = this.store.select(selectVisitorsStatistics);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(
      map(params => params[slug]),
      take(1)
    ).subscribe(slug => this.store.dispatch(DealAdminDetailsVisitorsActions.setSlug(slug)));
  }

  public updateParams(params: AnalyticsParams) {
    this.store.dispatch(DealAdminDetailsVisitorsActions.updateParams(params));
  }
}