/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { LanguageFragmentDoc } from '../../../../core/api/generated/language.fragment.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetOrganisationDetailsLayoutQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.OrganisationEntityInput>;
}>;


export type GetOrganisationDetailsLayoutQuery = { __typename?: 'Query', getOrganisation?: { __typename?: 'OrganisationEntity', id?: string | null, slug?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'OrganisationTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export const GetOrganisationDetailsLayoutDocument = gql`
    query getOrganisationDetailsLayout($entity: OrganisationEntityInput) {
  getOrganisation(entity: $entity) {
    id
    slug
    name
    translatables {
      id
      description
      language {
        ...Language
      }
    }
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationDetailsLayoutGQL extends Apollo.Query<GetOrganisationDetailsLayoutQuery, GetOrganisationDetailsLayoutQueryVariables> {
    override document = GetOrganisationDetailsLayoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }