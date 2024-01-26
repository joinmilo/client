/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from './media.fragment.generated';
export type FriendFragment = { __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null } | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null } | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null };

export const FriendFragmentDoc = gql`
    fragment Friend on FriendEntity {
  id
  accepted
  addressee {
    id
    user {
      id
      firstName
      lastName
      email
      phone
    }
    uploads {
      id
      profilePicture
      title
      media {
        ...Media
      }
    }
  }
  requester {
    id
    user {
      id
      firstName
      lastName
      email
      phone
    }
    uploads {
      id
      profilePicture
      title
      media {
        ...Media
      }
    }
  }
}
    ${MediaFragmentDoc}`;