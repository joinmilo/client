/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { FullUserContextFragmentDoc } from './full-user-context.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetMeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, modified?: any | null, description?: string | null, translatables?: Array<{ __typename?: 'UserContextTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, parent?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, contestPariticpations?: Array<{ __typename?: 'ContestParticipationEntity', id?: string | null, contest?: { __typename?: 'ContestEntity', id?: string | null } | null } | null> | null, contestVotes?: Array<{ __typename?: 'ContestVoteEntity', id?: string | null, contestParticipation?: { __typename?: 'ContestParticipationEntity', id?: string | null } | null } | null> | null, favoriteArticles?: Array<{ __typename?: 'ArticleEntity', id?: string | null } | null> | null, favoriteDeals?: Array<{ __typename?: 'DealEntity', id?: string | null } | null> | null, favoriteEvents?: Array<{ __typename?: 'EventEntity', id?: string | null } | null> | null, favoriteOrganisations?: Array<{ __typename?: 'OrganisationEntity', id?: string | null } | null> | null, favoriteAuthors?: Array<{ __typename?: 'UserContextEntity', id?: string | null } | null> | null, favoritingUsers?: Array<{ __typename?: 'UserContextEntity', id?: string | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, parent?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, sentFriendRequests?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null } | null } | null } | null> | null, receivedFriendRequests?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, parent?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, lastLogin?: any | null, verified?: boolean | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null, roles?: Array<{ __typename?: 'RoleEntity', id?: string | null } | null> | null } | null } | null };

export const GetMeDocument = gql`
    query GetMe {
  me {
    ...FullUserContext
  }
}
    ${FullUserContextFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMeGQL extends Apollo.Query<GetMeQuery, GetMeQueryVariables> {
    override document = GetMeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }