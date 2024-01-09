import { createActionGroup } from '@ngrx/store';
import { ContestCommentEntity, ContestCommentEntityInput, ContestEntity, Maybe } from 'src/app/core/api/generated/schema';

export const ContestPortalDetailsLandingActions = createActionGroup({
  source: 'Contest Portal Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (contest: Maybe<ContestEntity>) => ({ contest }),
    'update details': (contest: Maybe<ContestEntity>) => ({ contest }),
    'details updated': (contest: Maybe<ContestEntity>) => ({ contest }),

    'save contest comment': (entity: ContestCommentEntityInput) => ({ entity }),
    'contest comment saved': (entity: ContestCommentEntity) => ({ entity }),
  }
});