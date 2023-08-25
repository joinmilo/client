import { createActionGroup, emptyProps } from '@ngrx/store';
import { FeatureEntity } from 'src/app/core/api/generated/schema';
import { AdminRoutes } from '../typings/menu';

export const AdminActions = createActionGroup({
  source: 'Admin',
  events: {
    'init': emptyProps(),
    'open menu': emptyProps(),
    'close menu': emptyProps(),

    'add routes': (routes: AdminRoutes) => ({ routes }),

    'get features': emptyProps(),
    'set features': (features?: FeatureEntity[]) => ({ features }),

    'not found': emptyProps(),
  }
});




