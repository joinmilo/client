import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleCategoryEntity } from 'src/app/core/api/generated/schema';
import { portalArticleOverviewStateKey } from '../constants/portal-article-overview.constants';
import { PortalArticleOverviewState } from './portal-article-overview.reducer';

export const selectPortalArticleOverviewState = createFeatureSelector<PortalArticleOverviewState>(portalArticleOverviewStateKey);

export const selectSponsoredArticle = createSelector(
  selectPortalArticleOverviewState,
  state => state.sponsoredArticle
);

export const selectOverviewData = createSelector(
  selectPortalArticleOverviewState,
  state => state.overviewData
);

export const selectOverviewDataCategories = createSelector(
  selectOverviewData,
  articles => {
    return articles?.result?.reduce((result, current) => {
      const existing = result.find(category => category.id === current?.category?.id);
      
      existing
        ? existing.articles?.push(current)
        : result.push({ ...current?.category, articles: [current] } as ArticleCategoryEntity);

      return result;
    }, [] as ArticleCategoryEntity[]).reverse()
  }
);

export const selectParams = createSelector(
  selectPortalArticleOverviewState,
  state => state.params
);
