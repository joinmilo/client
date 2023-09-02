/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveOrganisationMembersMutationVariables = Types.Exact<{
  entities?: Types.InputMaybe<Array<Types.OrganisationMemberEntityInput> | Types.OrganisationMemberEntityInput>;
}>;


export type SaveOrganisationMembersMutation = { __typename?: 'Mutation', saveOrganisationMembers?: Array<{ __typename?: 'OrganisationMemberEntity', approved?: boolean | null, id?: string | null, isPublic?: boolean | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null> | null };

export const SaveOrganisationMembersDocument = gql`
    mutation saveOrganisationMembers($entities: [OrganisationMemberEntityInput!]) {
  saveOrganisationMembers(entities: $entities) {
    approved
    id
    isPublic
    organisation {
      id
    }
    userContext {
      id
    }
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