/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveOrganisationMembersMutationVariables = Types.Exact<{
  entities?: Types.InputMaybe<Array<Types.OrganisationMemberEntityInput> | Types.OrganisationMemberEntityInput>;
}>;


export type SaveOrganisationMembersMutation = { __typename?: 'Mutation', saveOrganisationMembers?: Array<{ __typename?: 'OrganisationMemberEntity', id?: string | null } | null> | null };

export const SaveOrganisationMembersDocument = gql`
    mutation saveOrganisationMembers($entities: [OrganisationMemberEntityInput!]) {
  saveOrganisationMembers(entities: $entities) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveOrganisationMembersGQL extends Apollo.Mutation<SaveOrganisationMembersMutation, SaveOrganisationMembersMutationVariables> {
    override document = SaveOrganisationMembersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }