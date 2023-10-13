/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { OrganisationCommentFragmentDoc } from './organisation-comment.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationCommentsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetOrganisationCommentsQuery = { __typename?: 'Query', getOrganisationComments?: { __typename?: 'PageableList_OrganisationCommentEntity', total: any, result?: Array<{ __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export const GetOrganisationCommentsDocument = gql`
    query getOrganisationComments($params: FilterSortPaginateInput) {
  getOrganisationComments(params: $params) {
    result {
      ...OrganisationComment
    }
    total
  }
}
    ${OrganisationCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationCommentsGQL extends Apollo.Query<GetOrganisationCommentsQuery, GetOrganisationCommentsQueryVariables> {
    override document = GetOrganisationCommentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }