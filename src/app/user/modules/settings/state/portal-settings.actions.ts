import { createActionGroup } from '@ngrx/store';
import { UserContextEntity, UserContextEntityInput } from 'src/schema/schema';

export const PortalSettingsActions = createActionGroup({
  source: 'Portal Settings',
  events: {
    'save personal data': (entity: UserContextEntityInput) => ({ entity }),
    'personal data saved': (entity: UserContextEntity) => ({ entity }),
  }
});