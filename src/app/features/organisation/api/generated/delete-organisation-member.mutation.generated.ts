/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteOrganisationMemberMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteOrganisationMemberMutation = { __typename?: 'Mutation', deleteOrganisationMember?: boolean | null };

export const DeleteOrganisationMemberDocument = gql`
    mutation deleteOrganisationMember($id: String) {
  deleteOrganisationMember(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOrganisationMemberGQL extends Apollo.Mutation<DeleteOrganisationMemberMutation, DeleteOrganisationMemberMutationVariables> {
    override document = DeleteOrganisationMemberDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }