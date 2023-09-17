import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { OrganisationAdminDetailsRatingActions } from '../state/organisation-admin-details-rating.actions';
import { selectRatingStatistics } from '../state/organisation-admin-details-rating.selectors';

@Component({
  selector: 'app-organisation-admin-details-rating',
  templateUrl: './organisation-admin-details-rating.component.html',
  styleUrls: ['./organisation-admin-details-rating.component.scss']
})
export class OrganisationAdminDetailsRatingComponent implements OnInit {
  
  public data = this.store.select(selectRatingStatistics);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(
      map(params => params[slug]),
      take(1)
    ).subscribe(slug => this.store.dispatch(OrganisationAdminDetailsRatingActions.setSlug(slug)));
  }

  public updateParams(params: AnalyticsParams) {
    this.store.dispatch(OrganisationAdminDetailsRatingActions.updateParams(params));
  }
}