/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AddressFragmentDoc } from '../../../../core/api/generated/address.fragment.generated';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { RatingDtoFragmentDoc } from '../../../../core/api/generated/rating.fragment.generated';
import { OrganisationCommentFragmentDoc } from './organisation-comment.fragment.generated';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
export type OrganisationDetailsFragment = { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, lastOrganisationComment?: { __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, members?: Array<{ __typename?: 'OrganisationMemberEntity', approved?: boolean | null, admin?: boolean | null, isPublic?: boolean | null, userContext?: { __typename?: 'UserContextEntity', user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null } | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null } | null> | null, translatables?: Array<{ __typename?: 'OrganisationTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null };

export const OrganisationDetailsFragmentDoc = gql`
    fragment OrganisationDetails on OrganisationEntity {
  id
  name
  slug
  address {
    ...Address
  }
  contact {
    ...Contact
  }
  calculatedRatings {
    ...RatingDto
  }
  lastOrganisationComment {
    ...OrganisationComment
  }
  members {
    approved
    admin
    isPublic
    userContext {
      user {
        id
        firstName
        lastName
        email
        phone
      }
      uploads {
        profilePicture
        media {
          ...Media
        }
      }
    }
  }
  translatables {
    id
    description
    language {
      ...Language
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
${ContactFragmentDoc}
${RatingDtoFragmentDoc}
${OrganisationCommentFragmentDoc}
${MediaFragmentDoc}
${LanguageFragmentDoc}`;