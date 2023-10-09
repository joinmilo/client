/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from './media.fragment.generated';
export type CommentatorFragment = { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null };

export const CommentatorFragmentDoc = gql`
    fragment Commentator on UserContextEntity {
  id
  uploads {
    profilePicture
    title
    media {
      ...Media
    }
  }
  user {
    id
    firstName
    lastName
  }
}
    ${MediaFragmentDoc}`;