import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { ArticleAdminDetailsVisitorsActions } from '../state/article-admin-details-visitors.actions';
import { selectVisitorsStatistics } from '../state/article-admin-details-visitors.selectors';

@Component({
  selector: 'app-article-admin-details-visitors',
  templateUrl: './article-admin-details-visitors.component.html',
  styleUrls: ['./article-admin-details-visitors.component.scss']
})
export class ArticleAdminDetailsVisitorsComponent implements OnInit {
  
  public data = this.store.select(selectVisitorsStatistics);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    console.log("df");
    this.activatedRoute.parent?.params.pipe(
      map(params => params[slug]),
      take(1)
    ).subscribe(slug => this.store.dispatch(ArticleAdminDetailsVisitorsActions.setSlug(slug)));
  }

  public updateParams(params: AnalyticsParams) {
    this.store.dispatch(ArticleAdminDetailsVisitorsActions.updateParams(params));
  }
}