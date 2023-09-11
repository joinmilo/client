/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteLanguageMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type DeleteLanguageMutation = { __typename?: 'Mutation', deleteLanguage?: boolean | null };

export const DeleteLanguageDocument = gql`
    mutation deleteLanguage($id: String) {
  deleteLanguage(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteLanguageGQL extends Apollo.Mutation<DeleteLanguageMutation, DeleteLanguageMutationVariables> {
    override document = DeleteLanguageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }