/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveUserContextMutationVariables = Types.Exact<{
  entity: Types.UserContextEntityInput;
}>;


export type SaveUserContextMutation = { __typename?: 'Mutation', saveUserContext?: { __typename?: 'UserContextEntity', description?: string | null, address?: { __typename?: 'AddressEntity', houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, user?: { __typename?: 'UserEntity', email?: string | null, firstName?: string | null, lastName?: string | null, phone?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null } | null } | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null };

export const SaveUserContextDocument = gql`
    mutation saveUserContext($entity: UserContextEntityInput!) {
  saveUserContext(entity: $entity) {
    address {
      houseNumber
      place
      postalCode
      street
      suburb {
        id
        name
      }
    }
    user {
      email
      firstName
      lastName
      phone
      language {
        id
        name
      }
    }
    description
    uploads {
      id
      media {
        ...Media
      }
      profilePicture
      title
    }
  }
}
    ${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveUserContextGQL extends Apollo.Mutation<SaveUserContextMutation, SaveUserContextMutationVariables> {
    override document = SaveUserContextDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }