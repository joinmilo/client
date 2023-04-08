import { createActionGroup, emptyProps } from '@ngrx/store';
import { ArticleEntity, EventEntity, Maybe, OrganisationEntity, UserContextEntity } from 'src/schema/schema';
import { ContestEntity, DealEntity, SearchDto, SurveyEntity } from '../../../../schema/schema';

export const SearchActions = createActionGroup({
  source: 'Search',
  events: {
    'navigate search page': emptyProps(),
    'search query set': (query?: Maybe<string>) => ({ query }),
    'set search result': (searchResult: SearchDto[]) => ({ searchResult }),
    'set found Events': (events?: EventEntity[]) => ({ events }),
    'set found Organisations': (organisations?: OrganisationEntity[]) => ({ organisations }),
    'set found Articles': (articles: ArticleEntity[]) => ({ articles }),
    'set found Contests': (contests: ContestEntity[]) => ({ contests }),
    'set found Deals': (deals: DealEntity[]) => ({ deals }),
    'set found Surveys': (surveys: SurveyEntity[]) => ({ surveys }),
    'set found Authors': (authors: UserContextEntity[]) => ({ authors }),
    'set search state': (isSearching: boolean) => ({ isSearching }),
  },
});
