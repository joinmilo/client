/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeleteFriendMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DeleteFriendMutation = { __typename?: 'Mutation', deleteFriend?: boolean | null };

export const DeleteFriendDocument = gql`
    mutation deleteFriend($id: String) {
  deleteFriend(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteFriendGQL extends Apollo.Mutation<DeleteFriendMutation, DeleteFriendMutationVariables> {
    override document = DeleteFriendDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }