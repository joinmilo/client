import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'ngx-cinlib/core';
import { NavigatorNodeEntity } from 'src/app/core/api/generated/schema';

export const NavigatorPortalDetailsLandingActions = createActionGroup({
  source: 'Navigator Portal Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (details: Maybe<NavigatorNodeEntity>) => ({ details }),
    // 'update details': (Navigator: Maybe<NavigatorNodeEntity>) => ({ details }),
    // 'details updated': (Navigator: Maybe<NavigatorNodeEntity>) => ({ details }),
  }
});