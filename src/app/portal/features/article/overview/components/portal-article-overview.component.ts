import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { displayQueryParam, guestArticlesFeatureKey } from 'src/app/core/constants/core.constants';
import { DisplayType } from 'src/app/core/typings/overview-display';
import { RadioInput } from 'src/app/shared/form/typings/radio-input';
import { FilterSortPaginateInput } from 'src/schema/schema';
import { PortalArticleOverviewActions } from '../state/portal-article-overview.actions';
import { selectOverviewData, selectSponsoredArticle } from '../state/portal-article-overview.selectors';

@Component({
  selector: 'app-portal-article-overview',
  templateUrl: './portal-article-overview.component.html',
  styleUrls: ['./portal-article-overview.component.scss']
})
export class PortalArticleOverviewComponent {

  public displayType = DisplayType.Category;

  public displayQueryParam = displayQueryParam;

  public inputs: RadioInput[] = [
    {
      icon: ['fas', 'shapes'],
      label: 'category',
      value: DisplayType.Category
    },
    {
      icon: ['fas', 'list'],
      label: 'table',
      value: DisplayType.Table
    },
  ];

  public articles = this.store.select(selectOverviewData);

  public sponsored = this.store.select(selectSponsoredArticle);

  public guestArticlesFeatureKey = guestArticlesFeatureKey;
  
  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PortalArticleOverviewActions.getSponsoredArticle());
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalArticleOverviewActions.updateParams(params));
  }

}