import { createActionGroup } from '@ngrx/store';
import { UserContextEntity, UserContextEntityInput } from 'src/schema/schema';

export const PortalParticipateActions = createActionGroup({
  source: 'Portal Participate',
  events: {
    
    'save': (entity: UserContextEntityInput) => ({ entity }),
    'saved': (entity: UserContextEntity) => ({ entity }),

  }
});
