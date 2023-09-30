import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, OrganisationEntity, OrganisationEntityInput, OrganisationMemberEntity, OrganisationMemberEntityInput, UserContextEntity, UserContextEntityInput } from 'src/app/core/api/generated/schema';

export const PortalParticipateActions = createActionGroup({
  source: 'Portal Participate',
  events: {

    'get organisations': (query?: Maybe<string>) => ({ query }),
    'set organisations': (filteredOrganisations?: Maybe<OrganisationEntity[]>) => ({ filteredOrganisations }),

    'send organisation requests': (organisationRequests: OrganisationMemberEntityInput[]) => ({ organisationRequests }),
    'organisation requests sent': (organisationRequests: Maybe<OrganisationMemberEntity[]>) => ({ organisationRequests }),

    'save author application': (entity: UserContextEntityInput) => ({ entity }),
    'author application saved': (entity: UserContextEntity) => ({ entity }),

    'save': (organisation: OrganisationEntityInput) => ({ organisation }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),
    
  }
});
