/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationsQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetOrganisationsQuery = { __typename?: 'Query', getOrganisations?: { __typename?: 'PageableList_OrganisationEntity', total: any, result?: Array<{ __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, members?: Array<{ __typename?: 'OrganisationMemberEntity', approved?: boolean | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null> | null } | null };

export const GetOrganisationsDocument = gql`
    query getOrganisations($params: FilterSortPaginateInput) {
  getOrganisations(params: $params) {
    result {
      id
      name
      members {
        approved
        userContext {
          id
        }
      }
      uploads {
        card
        media {
          ...Media
        }
      }
    }
    total
  }
}
    ${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationsGQL extends Apollo.Query<GetOrganisationsQuery, GetOrganisationsQueryVariables> {
    override document = GetOrganisationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }