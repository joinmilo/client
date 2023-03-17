import { createActionGroup, emptyProps } from '@ngrx/store';
import { ReportEntityInput, ReportTypeEntity } from '../../../../../schema/schema';

export const ReportActions = createActionGroup({
  source: 'Report',
  events: {
    'save report': (entity: ReportEntityInput) => ({ entity }),
    'report saved': emptyProps(),
  }
});

export const ReportTypeActions = createActionGroup({
  source: 'ReportTypes',
  events: {
    'get report types': emptyProps(),
    'set current types': (types?: ReportTypeEntity[]) => ({ types }),
  }
});