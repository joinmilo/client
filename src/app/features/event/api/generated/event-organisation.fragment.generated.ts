/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
export type EventOrganisationFragment = { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null };

export const EventOrganisationFragmentDoc = gql`
    fragment EventOrganisation on OrganisationEntity {
  id
  name
  slug
  uploads {
    id
    title
    card
    media {
      ...Media
    }
  }
}
    ${MediaFragmentDoc}`;