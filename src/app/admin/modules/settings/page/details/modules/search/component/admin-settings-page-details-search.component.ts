import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { AdminSettingsPageDetailsSearchActions } from '../state/admin-settings-page-details-search.actions';
import { selectSearchStatistics } from '../state/admin-settings-page-details-search.selectors';

@Component({
  selector: 'app-settings-page-details-search',
  templateUrl: './admin-settings-page-details-search.component.html',
  styleUrls: ['./admin-settings-page-details-search.component.scss']
})
export class AdminSettingsPageDetailsSearchComponent implements OnInit {
  
  public data = this.store.select(selectSearchStatistics);
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }
  
  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(
      map(params => params[slug]),
      take(1)
    ).subscribe(slug => this.store.dispatch(AdminSettingsPageDetailsSearchActions.setSlug(slug)));
  }

  public updateParams(params: AnalyticsParams) {
    this.store.dispatch(AdminSettingsPageDetailsSearchActions.updateParams(params));
  }

}