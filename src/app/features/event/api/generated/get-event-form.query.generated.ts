/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AddressFragmentDoc } from '../../../../core/api/generated/address.fragment.generated';
import { EventCategoryFragmentDoc } from './event-category.fragment.generated';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { EventOrganisationFragmentDoc } from './event-organisation.fragment.generated';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { ScheduleFragmentDoc } from './event-schedule.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEventFormQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.EventEntityInput>;
}>;


export type GetEventFormQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, entryFee?: number | null, hasSchedules?: boolean | null, slug?: string | null, videoChatLink?: string | null, modified?: any | null, name?: string | null, shortDescription?: string | null, content?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, attendeeConfiguration?: { __typename?: 'EventAttendeeConfigurationEntity', approval?: boolean | null, maxAttendees?: number | null } | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', id?: string | null, title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null, schedules?: Array<{ __typename?: 'EventScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null> | null, translatables?: Array<{ __typename?: 'EventTranslatableEntity', id?: string | null, content?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'EventMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null } | null };

export const GetEventFormDocument = gql`
    query getEventForm($entity: EventEntityInput) {
  getEvent(entity: $entity) {
    id
    entryFee
    hasSchedules
    slug
    videoChatLink
    modified
    name
    shortDescription
    content
    address {
      ...Address
    }
    attendeeConfiguration {
      approval
      maxAttendees
    }
    category {
      ...EventCategory
    }
    contact {
      ...Contact
    }
    organisation {
      ...EventOrganisation
    }
    schedules {
      ...Schedule
    }
    translatables {
      id
      content
      name
      shortDescription
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
}
    ${AddressFragmentDoc}
${EventCategoryFragmentDoc}
${ContactFragmentDoc}
${EventOrganisationFragmentDoc}
${ScheduleFragmentDoc}
${LanguageFragmentDoc}
${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventFormGQL extends Apollo.Query<GetEventFormQuery, GetEventFormQueryVariables> {
    override document = GetEventFormDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }