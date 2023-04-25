import { createActionGroup, emptyProps } from '@ngrx/store';
import { AppEntity, SocialMediaEntity } from 'src/schema/schema';

export const PortalFooterActions = createActionGroup({
  source: 'Portal Footer',
  events: {
    'init': emptyProps(),

    'set apps': (apps: AppEntity[]) => ({ apps }),
    'set social media': (socialMedia: SocialMediaEntity[]) => ({ socialMedia }),
  },
});
