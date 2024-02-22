/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetNavigatorNodeDetailsQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.NavigatorNodeEntityInput>;
}>;


export type GetNavigatorNodeDetailsQuery = { __typename?: 'Query', getNavigatorNode?: { __typename?: 'NavigatorNodeEntity', id?: string | null, modified?: any | null, created?: any | null, slug?: string | null, title?: string | null, content?: string | null, additionalInformation?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'NavigatorNodeTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, additionalInformation?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetNavigatorNodeDetailsDocument = gql`
    query getNavigatorNodeDetails($entity: NavigatorNodeEntityInput) {
  getNavigatorNode(entity: $entity) {
    id
    modified
    created
    slug
    title
    content
    additionalInformation
    name
    translatables {
      id
      name
      content
      additionalInformation
      title
      language {
        id
        locale
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNavigatorNodeDetailsGQL extends Apollo.Query<GetNavigatorNodeDetailsQuery, GetNavigatorNodeDetailsQueryVariables> {
    override document = GetNavigatorNodeDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }