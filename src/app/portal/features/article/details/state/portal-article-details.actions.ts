import { createActionGroup } from '@ngrx/store';
import { ArticleCommentEntity, ArticleCommentEntityInput, ArticleEntity, ArticleRatingEntity, ArticleRatingEntityInput, Maybe } from 'src/schema/schema';

export const PortalArticleDetailsActions = createActionGroup({
  source: 'Portal Article Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (article: Maybe<ArticleEntity>) => ({ article }),
    'update details': (article: Maybe<ArticleEntity>) => ({ article }),
    'details updated': (article: Maybe<ArticleEntity>) => ({ article }),

    'get comments': (slug: Maybe<string>) => ({ slug }),
    'set comments': (comments: Maybe<ArticleCommentEntity[]>) => ({ comments }),

    'save article rating': (entity: ArticleRatingEntityInput) => ({ entity }),
    'article rating saved': (entity: ArticleRatingEntity) => ({ entity }),

    'save article comment': (entity: ArticleCommentEntityInput) => ({ entity }),
    'article comment saved': (entity: ArticleCommentEntity) => ({ entity }),
  }
});