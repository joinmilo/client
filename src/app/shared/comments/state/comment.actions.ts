import { createActionGroup } from '@ngrx/store';
import { EventCommentEntity, EventCommentEntityInput } from 'src/schema/schema';

export const CommentActions = createActionGroup({
  source: 'Comment',
  events: {
    'save event comment': (entity: EventCommentEntityInput) => ({ entity }),
    'event comment saved': (entity: EventCommentEntity) => ({ entity }),
  }
});

