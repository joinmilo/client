/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetPageDetailsLayoutQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.PageEntityInput>;
}>;


export type GetPageDetailsLayoutQuery = { __typename?: 'Query', getPage?: { __typename?: 'PageEntity', id?: string | null, slug?: string | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetPageDetailsLayoutDocument = gql`
    query getPageDetailsLayout($entity: PageEntityInput) {
  getPage(entity: $entity) {
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
  export class GetPageDetailsLayoutGQL extends Apollo.Query<GetPageDetailsLayoutQuery, GetPageDetailsLayoutQueryVariables> {
    override document = GetPageDetailsLayoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }