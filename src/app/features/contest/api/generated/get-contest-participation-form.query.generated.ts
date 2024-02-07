/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ContestTypeFragmentDoc } from './contest-type.fragement.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestParticipationFormQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ContestEntityInput>;
}>;


export type GetContestParticipationFormQuery = { __typename?: 'Query', getContest?: { __typename?: 'ContestEntity', id?: string | null, modified?: any | null, created?: any | null, slug?: string | null, maxParticipations?: number | null, maxVotes?: number | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, code?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null } | null };

export const GetContestParticipationFormDocument = gql`
    query getContestParticipationForm($entity: ContestEntityInput) {
  getContest(entity: $entity) {
    id
    modified
    created
    slug
    maxParticipations
    maxVotes
    type {
      ...ContestType
    }
  }
}
    ${ContestTypeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestParticipationFormGQL extends Apollo.Query<GetContestParticipationFormQuery, GetContestParticipationFormQueryVariables> {
    override document = GetContestParticipationFormDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }