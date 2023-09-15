import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { ArticleAdminDetailsSearchActions } from '../state/article-admin-details-search.actions';
import { selectSearchStatistics } from '../state/article-admin-details-search.selectors';

@Component({
  selector: 'app-article-admin-details-search',
  templateUrl: './article-admin-details-search.component.html',
  styleUrls: ['./article-admin-details-search.component.scss']
})
export class ArticleAdminDetailsSearchComponent implements OnInit {
  
  public data = this.store.select(selectSearchStatistics);
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }
  
  public ngOnInit(): void {
    console.log("DD");
    this.activatedRoute.parent?.params.pipe(
      map(params => params[slug]),
      take(1)
    ).subscribe(slug => this.store.dispatch(ArticleAdminDetailsSearchActions.setSlug(slug)));
  }

  public updateParams(params: AnalyticsParams) {
    this.store.dispatch(ArticleAdminDetailsSearchActions.updateParams(params));
  }

}