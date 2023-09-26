/* eslint-disable */
import * as Types from '../../../core/api/generated/schema';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetDeveloperContactQueryVariables = Types.Exact<{
  entity?: Types.InputMaybe<Types.ContactEntityInput>;
}>;


export type GetDeveloperContactQuery = { __typename?: 'Query', getContact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, phone?: string | null, name?: string | null, website?: string | null } | null };

export const GetDeveloperContactDocument = gql`
    query getDeveloperContact($entity: ContactEntityInput) {
  getContact(entity: $entity) {
    id
    email
    phone
    name
    website
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDeveloperContactGQL extends Apollo.Query<GetDeveloperContactQuery, GetDeveloperContactQueryVariables> {
    override document = GetDeveloperContactDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }