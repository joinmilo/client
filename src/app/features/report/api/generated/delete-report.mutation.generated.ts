/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteReportMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteReportMutation = { __typename?: 'Mutation', deleteReport?: boolean | null };

export const DeleteReportDocument = gql`
    mutation deleteReport($id: String) {
  deleteReport(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteReportGQL extends Apollo.Mutation<DeleteReportMutation, DeleteReportMutationVariables> {
    override document = DeleteReportDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }