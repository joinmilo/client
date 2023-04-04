import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardInput } from 'src/app/core/typings/card';
import { pageStateKey } from '../constants/page.constants';
import { PageState } from './page.reducer';

export const selectPageState = createFeatureSelector<PageState>(pageStateKey);

export const selectCurrentPage = createSelector(
  selectPageState,
  state => state.page
);

export const selectRecentArticles = createSelector(
  selectPageState,
  state => state.recentArticles?.map(article => ({
    categoryTranslatables: article.category?.translatables,
    categoryTranslatableField: 'name',
    creator: article.publicAuthor ?? article.author?.user?.firstName,
    creatorImage: article.author?.titleImage,
    date: article.modified,
    image: article.cardImage,
    textTranslatableField: 'shortDescription', //TODO: take short description
    titleTranslatableField: 'title',
    translatables: article.translatables,
  })) as CardInput[]
);
