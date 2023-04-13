import { createActionGroup, emptyProps } from '@ngrx/store';
import { ReportEntity, ReportEntityInput, ReportTypeEntity } from 'src/schema/schema';

export const ReportActions = createActionGroup({
  source: 'Report',
  events: {
    'get report types': emptyProps(),
    'set current types': (types?: ReportTypeEntity[]) => ({ types }),

    'save report': (entity: ReportEntityInput) => ({ entity }),
    'report saved': (entity: ReportEntity) => ({ entity }),

    'reset': emptyProps(),
  }
});