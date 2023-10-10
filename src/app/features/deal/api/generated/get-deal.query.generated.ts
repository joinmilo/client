/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { AddressFragmentDoc } from '../../../../core/api/generated/address.fragment.generated';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { ContactFragmentDoc } from '../../../../core/api/generated/contact.fragment.generated';
import { MediaFragmentDoc } from '../../../../core/api/generated/media.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetDealQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.DealEntityInput>;
}>;


export type GetDealQuery = { __typename?: 'Query', getDeal?: { __typename?: 'DealEntity', content?: string | null, created?: any | null, id?: string | null, offer?: boolean | null, price?: number | null, modified?: any | null, name?: string | null, slug?: string | null, shortDescription?: string | null, isPublic?: boolean | null, sponsored?: boolean | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, category?: { __typename?: 'DealCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'DealCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, uploads?: Array<{ __typename?: 'DealMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, created?: any | null, extension?: string | null, mimeType?: string | null, modified?: any | null, name?: string | null, size?: any | null, url?: string | null, attribution?: { __typename?: 'MediaAttributionEntity', id?: string | null, title?: string | null, author?: string | null, source?: string | null, license?: string | null } | null } | null } | null> | null, translatables?: Array<{ __typename?: 'DealTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetDealDocument = gql`
    query getDeal($entity: DealEntityInput) {
  getDeal(entity: $entity) {
    address {
      ...Address
    }
    category {
      id
      icon
      color
      translatables {
        id
        name
        language {
          ...Language
        }
      }
    }
    contact {
      ...Contact
    }
    content
    created
    id
    offer
    price
    modified
    name
    slug
    shortDescription
    isPublic
    sponsored
    uploads {
      title
      card
      media {
        ...Media
      }
    }
    translatables {
      id
      name
      content
      shortDescription
      language {
        ...Language
      }
    }
  }
}
    ${AddressFragmentDoc}
${LanguageFragmentDoc}
${ContactFragmentDoc}
${MediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDealGQL extends Apollo.Query<GetDealQuery, GetDealQueryVariables> {
    override document = GetDealDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }