import { createActionGroup } from '@ngrx/store';
import { ContestCommentEntity, ContestCommentEntityInput, ContestEntity, Maybe } from 'src/schema/schema';

export const PortalContestDetailsActions = createActionGroup({
  source: 'Portal Contest Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (contest: Maybe<ContestEntity>) => ({ contest }),
    'update details': (contest: Maybe<ContestEntity>) => ({ contest }),
    'details updated': (contest: Maybe<ContestEntity>) => ({ contest }),

    'get comments': (slug: Maybe<string>) => ({ slug }),
    'set comments': (comments: Maybe<ContestCommentEntity[]>) => ({ comments }),

    'save contest comment': (entity: ContestCommentEntityInput) => ({ entity }),
    'contest comment saved': (entity: ContestCommentEntity) => ({ entity }),
  }
});