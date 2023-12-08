import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterSortPaginateInput } from 'src/app/core/api/generated/schema';
import { guestArticlesFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { displayQueryParam } from 'src/app/core/constants/queryparam.constants';
import { OverviewDisplayType } from 'src/app/core/typings/filter-params/overview-display';
import { RadioButtonInput } from 'src/app/shared/form/radio-button/typings/radio-button-input';
import { PortalArticleOverviewActions } from '../state/portal-article-overview.actions';
import { selectOverviewData, selectSponsoredArticle } from '../state/portal-article-overview.selectors';

@Component({
  selector: 'app-portal-article-overview',
  templateUrl: './portal-article-overview.component.html',
  styleUrls: ['./portal-article-overview.component.scss']
})
export class PortalArticleOverviewComponent {

  public displayType = OverviewDisplayType.Category;

  public displayQueryParam = displayQueryParam;

  public inputs: RadioButtonInput[] = [
    {
      style: 'fas',
      icon: 'fa-shapes',
      label: 'category',
      value: OverviewDisplayType.Category
    },
    {
      style: 'fas',
      icon: 'fa-list',
      label: 'table',
      value: OverviewDisplayType.Table
    },
  ];

  public articles = this.store.select(selectOverviewData);

  public sponsored = this.store.select(selectSponsoredArticle);

  public guestArticlesFeatureKey = guestArticlesFeatureKey;

  public portalUrl = portalUrl;
  
  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PortalArticleOverviewActions.getSponsoredArticle());
  }

  public updateParams(params: FilterSortPaginateInput) {
    this.store.dispatch(PortalArticleOverviewActions.updateParams(params));
  }

}