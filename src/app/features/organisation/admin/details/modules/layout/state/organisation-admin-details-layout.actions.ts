import { createActionGroup } from '@ngrx/store';
import { Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';

export const OrganisationAdminDetailsLayoutActions = createActionGroup({
  source: 'Organisation Admin Details Layout',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (organisation: Maybe<OrganisationEntity>) => ({ organisation }),
  }
});
