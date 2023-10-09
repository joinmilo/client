/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
export type MediaFragment = { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null };

export const MediaFragmentDoc = gql`
    fragment Media on MediaEntity {
  id
  created
  extension
  mimeType
  modified
  name
  size
  url
  base64
  attribution {
    id
    title
    author
    source
    license
  }
}
    `;