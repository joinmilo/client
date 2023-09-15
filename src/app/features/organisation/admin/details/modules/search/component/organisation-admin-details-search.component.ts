import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { OrganisationAdminDetailsSearchActions } from '../state/organisation-admin-details-search.actions';
import { selectSearchStatistics } from '../state/organisation-admin-details-search.selectors';

@Component({
  selector: 'app-organisation-admin-details-search',
  templateUrl: './organisation-admin-details-search.component.html',
  styleUrls: ['./organisation-admin-details-search.component.scss']
})
export class OrganisationAdminDetailsSearchComponent implements OnInit {
  
  public data = this.store.select(selectSearchStatistics);
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }
  
  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(
      map(params => params[slug]),
      take(1)
    ).subscribe(slug => this.store.dispatch(OrganisationAdminDetailsSearchActions.setSlug(slug)));
  }

  public updateParams(params: AnalyticsParams) {
    this.store.dispatch(OrganisationAdminDetailsSearchActions.updateParams(params));
  }

}