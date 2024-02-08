import { createActionGroup } from '@ngrx/store';
import { ContestCommentEntity, Maybe } from 'src/app/core/api/generated/schema';

export const ContestPortalDetailsCommentsActions = createActionGroup({
  source: 'Contest Portal Details Comments',
  events: {
    'get comments': (slug: Maybe<string>) => ({ slug }),
    'set comments': (comments: Maybe<ContestCommentEntity[]>) => ({ comments })
  }
});
