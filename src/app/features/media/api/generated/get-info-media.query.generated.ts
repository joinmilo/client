/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
import { InfoMediaCardFragmentDoc } from 'src/app/shared/widgets/card/api/generated/info-media-card.fragment.generated';
export type GetInfoMediaQueryVariables = Types.Exact<{
  params?: Types.InputMaybe<Types.FilterSortPaginateInput>;
}>;


export type GetInfoMediaQuery = { __typename?: 'Query', getInfoMedia?: { __typename?: 'PageableList_InfoMediaEntity', total: any, result?: Array<{ __typename?: 'InfoMediaEntity' } | null> | null } | null };

export const GetInfoMediaDocument = gql`
    query getInfoMedia($params: FilterSortPaginateInput) {
  getInfoMedia(params: $params) {
    result {
      ...InfoMediaCard
    }
    total
  }
}
    ${InfoMediaCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetInfoMediaGQL extends Apollo.Query<GetInfoMediaQuery, GetInfoMediaQueryVariables> {
    override document = GetInfoMediaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }