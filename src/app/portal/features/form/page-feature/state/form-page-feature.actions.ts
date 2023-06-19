import { createActionGroup, emptyProps } from '@ngrx/store';
import { UserContextEntity } from 'src/schema/schema';

export const FormPageFeatureActions = createActionGroup({
  source: 'Form Page Feature',
  events: {
    'get recent forms': emptyProps(),
    'set recent forms': (forms?: UserContextEntity[]) => ({ forms }),
  }
});




