import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, SuburbEntity, UserContextEntity, UserContextEntityInput, UserDeletionEntity, UserDeletionTypeEntity } from 'src/app/core/api/generated/schema';


export const UserSettingsActions = createActionGroup({
  source: 'Portal Settings',
  events: {
    'save personal data': (entity: UserContextEntityInput) => ({ entity }),
    'personal data saved': (entity: UserContextEntity) => ({ entity }),
   
    'get user deletion types': emptyProps(),
    'set user deletion types': (types?: UserDeletionTypeEntity[]) => ({ types }),

    'save user deletion types': (types: Maybe<UserDeletionTypeEntity>[]) => ({ types }),
    'save user deletion description': (description: Maybe<string>) => ({ description }),

    'delete user': (password: string, userDeletion: Maybe<UserDeletionEntity>) => ({ password, userDeletion }),
    'user deleted': (userDeleted: Maybe<boolean>) => ({ userDeleted }),

    'get suburbs': emptyProps(),
    'set suburbs': (result: SuburbEntity[]) => ({ result }), 

  }
});