import { createActionGroup } from '@ngrx/store';
import { Maybe, OrganisationCommentEntity, OrganisationCommentEntityInput, OrganisationEntity, OrganisationRatingEntity, OrganisationRatingEntityInput } from 'src/app/core/api/generated/schema';

export const PortalOrganisationDetailsActions = createActionGroup({
  source: 'Portal Organisation Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (organisation: Maybe<OrganisationEntity>) => ({ organisation }),
    'update details': (organisation: Maybe<OrganisationEntity>) => ({ organisation }),
    'details updated': (organisation: Maybe<OrganisationEntity>) => ({ organisation }),

    'get comments': (slug: Maybe<string>) => ({ slug }),
    'set comments': (comments: Maybe<OrganisationCommentEntity[]>) => ({ comments }),

    'save organisation rating': (entity: OrganisationRatingEntityInput) => ({ entity }),
    'organisation rating saved': (entity: OrganisationRatingEntity) => ({ entity }),

    'save organisation comment': (entity: OrganisationCommentEntityInput) => ({ entity }),
    'organisation comment saved': (entity: OrganisationCommentEntity) => ({ entity }),
  }
});