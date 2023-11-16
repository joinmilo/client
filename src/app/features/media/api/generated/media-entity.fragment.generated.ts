/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
export type MediaEntityFragment = { __typename?: 'MediaEntity', mimeType?: string | null, name?: string | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', author?: string | null, id?: string | null, license?: string | null, source?: string | null, title?: string | null } | null };

export const MediaEntityFragmentDoc = gql`
    fragment MediaEntity on MediaEntity {
  attribution {
    author
    id
    license
    source
    title
  }
  mimeType
  name
  url
}
    `;