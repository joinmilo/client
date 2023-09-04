/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteOrganisationMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteOrganisationMutation = { __typename?: 'Mutation', deleteOrganisation?: boolean | null };

export const DeleteOrganisationDocument = gql`
    mutation deleteOrganisation($id: String) {
  deleteOrganisation(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOrganisationGQL extends Apollo.Mutation<DeleteOrganisationMutation, DeleteOrganisationMutationVariables> {
    override document = DeleteOrganisationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }