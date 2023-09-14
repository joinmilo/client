/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteOrganisationCommentMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteOrganisationCommentMutation = { __typename?: 'Mutation', deleteOrganisationComment?: boolean | null };

export const DeleteOrganisationCommentDocument = gql`
    mutation deleteOrganisationComment($id: String) {
  deleteOrganisationComment(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOrganisationCommentGQL extends Apollo.Mutation<DeleteOrganisationCommentMutation, DeleteOrganisationCommentMutationVariables> {
    override document = DeleteOrganisationCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }