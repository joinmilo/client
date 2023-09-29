/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestTypeQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ContestTypeEntityInput>;
}>;


export type GetContestTypeQuery = { __typename?: 'Query', getContestType?: { __typename?: 'ContestTypeEntity', id?: string | null, name?: string | null } | null };

export const GetContestTypeDocument = gql`
    query getContestType($entity: ContestTypeEntityInput) {
  getContestType(entity: $entity) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestTypeGQL extends Apollo.Query<GetContestTypeQuery, GetContestTypeQueryVariables> {
    override document = GetContestTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }