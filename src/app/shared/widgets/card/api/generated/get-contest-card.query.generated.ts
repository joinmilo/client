/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { ContestCardFragmentDoc } from './contest-card.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetContestCardQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ContestEntityInput>;
}>;


export type GetContestCardQuery = { __typename?: 'Query', getContest?: { __typename?: 'ContestEntity', id?: string | null, created?: any | null, modified?: any | null, slug?: string | null, participationEndDate?: any | null, voteEndDate?: any | null, uploads?: Array<{ __typename?: 'ContestMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null };

export const GetContestCardDocument = gql`
    query getContestCard($entity: ContestEntityInput) {
  getContest(entity: $entity) {
    ...ContestCard
  }
}
    ${ContestCardFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestCardGQL extends Apollo.Query<GetContestCardQuery, GetContestCardQueryVariables> {
    override document = GetContestCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }