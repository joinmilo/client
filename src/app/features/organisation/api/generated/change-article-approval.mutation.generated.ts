/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ChangeOrganisationApprovalMutationVariables = Types.Exact<{
  organisationId?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ChangeOrganisationApprovalMutation = { __typename?: 'Mutation', changeOrganisationApproval?: boolean | null };

export const ChangeOrganisationApprovalDocument = gql`
    mutation changeOrganisationApproval($organisationId: String) {
  changeOrganisationApproval(organisationId: $organisationId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangeOrganisationApprovalGQL extends Apollo.Mutation<ChangeOrganisationApprovalMutation, ChangeOrganisationApprovalMutationVariables> {
    override document = ChangeOrganisationApprovalDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }