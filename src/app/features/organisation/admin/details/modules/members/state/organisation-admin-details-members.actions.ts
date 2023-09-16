import { createActionGroup, emptyProps } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, OrganisationMemberEntity, PageableList_OrganisationMemberEntity } from 'src/app/core/api/generated/schema';


export const OrganisationAdminDetailsMembersActions = createActionGroup({
  source: 'Organisation Admin Details Members',
  events: {
    'set members': (members: PageableList_OrganisationMemberEntity) => ({ members }),
    'update params': (slug: Maybe<string> , params?: FilterSortPaginateInput) => ({ slug, params }),

    'delete member': (member?: Maybe<OrganisationMemberEntity>) => ({ member }),
    'member deleted': emptyProps(),

    'toggle Public': (member?: Maybe<OrganisationMemberEntity>) => ({ member }),
    'public toggled': emptyProps(),
  }
});
