/* eslint-disable */
import * as Types from '../../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteSurveyMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteSurveyMutation = { __typename?: 'Mutation', deleteSurvey?: boolean | null };

export const DeleteSurveyDocument = gql`
    mutation deleteSurvey($id: String) {
  deleteSurvey(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSurveyGQL extends Apollo.Mutation<DeleteSurveyMutation, DeleteSurveyMutationVariables> {
    override document = DeleteSurveyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }