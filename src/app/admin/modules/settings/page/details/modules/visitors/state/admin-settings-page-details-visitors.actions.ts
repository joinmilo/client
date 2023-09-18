import { createActionGroup } from '@ngrx/store';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';

export const AdminSettingsPageDetailsVisitorsActions = createActionGroup({
  source: 'Page Admin Details Visitors',
  events: {
    'set slug': (slug: string) => ({ slug }),
    'update params': (params: AnalyticsParams) => ({ params }),
    'set statistics': (result?: AnalyticsDto[]) => ({ result })
  }
});
