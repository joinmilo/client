/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteReportTypeMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteReportTypeMutation = { __typename?: 'Mutation', deleteReportType?: boolean | null };

export const DeleteReportTypeDocument = gql`
    mutation deleteReportType($id: String) {
  deleteReportType(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteReportTypeGQL extends Apollo.Mutation<DeleteReportTypeMutation, DeleteReportTypeMutationVariables> {
    override document = DeleteReportTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }