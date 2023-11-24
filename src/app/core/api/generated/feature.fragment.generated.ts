/* eslint-disable */
import * as Types from './schema';

import { gql } from 'apollo-angular';
export type PluginFragment = { __typename?: 'PluginEntity', id?: string | null, active?: boolean | null, icon?: string | null, name?: string | null, code?: string | null };

export const PluginFragmentDoc = gql`
    fragment Plugin on PluginEntity {
  id
  active
  icon
  name
  code
}
    `;