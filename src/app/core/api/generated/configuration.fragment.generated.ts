/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from './media.fragment.generated';
export type ConfigurationFragment = { __typename?: 'ConfigurationEntity', id?: string | null, code?: string | null, value?: string | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null };

export const ConfigurationFragmentDoc = gql`
    fragment Configuration on ConfigurationEntity {
  id
  code
  value
  media {
    ...Media
  }
}
    ${MediaFragmentDoc}`;