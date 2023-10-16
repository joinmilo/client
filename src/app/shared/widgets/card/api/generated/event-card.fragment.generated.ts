/* eslint-disable */
import * as Types from '../../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AddressFragmentDoc } from '../../../../../core/api/generated/address.fragment.generated';
import { LanguageFragmentDoc } from '../../../../../core/api/generated/language.fragment.generated';
import { MediaFragmentDoc } from '../../../../../core/api/generated/media.fragment.generated';
import { ContactFragmentDoc } from '../../../../../core/api/generated/contact.fragment.generated';
export type EventCardFragment = { __typename?: 'EventEntity', id?: string | null, slug?: string | null, modified?: any | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, creator?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', id?: string | null, profilePicture?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null, schedule?: { __typename?: 'EventScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null, translatables?: Array<{ __typename?: 'EventTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'EventMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, base64?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null };

export const EventCardFragmentDoc = gql`
    fragment EventCard on EventEntity {
  id
  slug
  modified
  address {
    ...Address
  }
  category {
    id
    color
    icon
    name
    translatables {
      id
      name
      language {
        ...Language
      }
    }
  }
  creator {
    id
    uploads {
      id
      profilePicture
      media {
        ...Media
      }
    }
  }
  contact {
    ...Contact
  }
  organisation {
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
  schedule(begin: $scheduleBegin, end: $scheduleEnd) {
    id
    startDate
    endDate
  }
  translatables {
    id
    name
    content
    shortDescription
    language {
      id
      locale
      name
    }
  }
  uploads {
    title
    card
    media {
      ...Media
    }
  }
}
    ${AddressFragmentDoc}
${LanguageFragmentDoc}
${MediaFragmentDoc}
${ContactFragmentDoc}`;