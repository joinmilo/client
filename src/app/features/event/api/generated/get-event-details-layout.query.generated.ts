/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
export type GetEventDetailsLayoutQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.EventEntityInput>;
}>;


export type GetEventDetailsLayoutQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, slug?: string | null, translatables?: Array<{ __typename?: 'EventTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetEventDetailsLayoutDocument = gql`
    query getEventDetailsLayout($entity: EventEntityInput) {
  getEvent(entity: $entity) {
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
  export class GetEventDetailsLayoutGQL extends Apollo.Query<GetEventDetailsLayoutQuery, GetEventDetailsLayoutQueryVariables> {
    override document = GetEventDetailsLayoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }