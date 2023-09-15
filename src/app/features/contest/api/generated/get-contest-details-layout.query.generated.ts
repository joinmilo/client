/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestDetailsLayoutQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ContestEntityInput>;
}>;


export type GetContestDetailsLayoutQuery = { __typename?: 'Query', getContest?: { __typename?: 'ContestEntity', id?: string | null, slug?: string | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetContestDetailsLayoutDocument = gql`
    query getContestDetailsLayout($entity: ContestEntityInput) {
  getContest(entity: $entity) {
    id
    slug
    translatables {
      id
      name
      content
      shortDescription
      language {
        ...Language
      }
    }
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestDetailsLayoutGQL extends Apollo.Query<GetContestDetailsLayoutQuery, GetContestDetailsLayoutQueryVariables> {
    override document = GetContestDetailsLayoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }