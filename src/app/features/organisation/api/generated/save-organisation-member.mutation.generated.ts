/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SaveOrganisationMemberMutationVariables = Types.Exact<{
  entity: Types.OrganisationMemberEntityInput;
}>;


export type SaveOrganisationMemberMutation = { __typename?: 'Mutation', saveOrganisationMember?: { __typename?: 'OrganisationMemberEntity', id?: string | null } | null };

export const SaveOrganisationMemberDocument = gql`
    mutation saveOrganisationMember($entity: OrganisationMemberEntityInput!) {
  saveOrganisationMember(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveOrganisationMemberGQL extends Apollo.Mutation<SaveOrganisationMemberMutation, SaveOrganisationMemberMutationVariables> {
    override document = SaveOrganisationMemberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }