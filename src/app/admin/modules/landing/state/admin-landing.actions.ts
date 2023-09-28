import { createActionGroup, emptyProps } from '@ngrx/store';
import { ContactEntity, ContactEntityInput, Maybe, MilestoneEntity } from 'src/app/core/api/generated/schema';

export const AdminLandingActions = createActionGroup({
  source: 'Role Admin Overview',
  events: {

    'get developer contact': (entity: ContactEntityInput) => ({ entity}),
    'set developer contact': (contact: Maybe<ContactEntity>) => ({ contact }),

    'get milestones': emptyProps(),
    'set milestones': (milestones: Maybe<MilestoneEntity[]>) => ({ milestones })
  }
});
