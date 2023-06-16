import { createActionGroup, emptyProps } from '@ngrx/store';
import { OrganisationEntity } from 'src/schema/schema';

export const OrganisationPageFeatureActions = createActionGroup({
  source: 'Organisation Page Feature',
  events: {
    'get recent organisations': emptyProps(),
    'set recent organisations': (organisations?: OrganisationEntity[]) => ({ organisations }),
  }
});




