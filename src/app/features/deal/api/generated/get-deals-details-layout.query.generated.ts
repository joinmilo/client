/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetDealDetailsLayoutQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.DealEntityInput>;
}>;


export type GetDealDetailsLayoutQuery = { __typename?: 'Query', getDeal?: { __typename?: 'DealEntity', id?: string | null, slug?: string | null, translatables?: Array<{ __typename?: 'DealTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetDealDetailsLayoutDocument = gql`
    query getDealDetailsLayout($entity: DealEntityInput) {
  getDeal(entity: $entity) {
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
  export class GetDealDetailsLayoutGQL extends Apollo.Query<GetDealDetailsLayoutQuery, GetDealDetailsLayoutQueryVariables> {
    override document = GetDealDetailsLayoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }