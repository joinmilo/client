import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, OrganisationEntity, OrganisationEntityInput } from 'src/app/core/api/generated/schema';

export const OrganisationAdminFormActions = createActionGroup({
  source: 'Organisation Admin Form',
  events: {

    'get organisation': (slug: Maybe<string>) => ({ slug }),
    'set organisation': (organisation: Maybe<OrganisationEntity>) => ({ organisation }),

    'save': (organisation: OrganisationEntityInput) => ({ organisation }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),

  }
});
