import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, SuburbEntity, UserContextEntityInput, UserDeletionTypeEntity } from 'src/app/core/api/generated/schema';


export const UserSettingsActions = createActionGroup({
  source: 'Portal Settings',
  events: {
    'save personal data': (entity: UserContextEntityInput) => ({ entity }),
    'personal data saved': emptyProps(),
   
    'get user deletion types': emptyProps(),
    'set user deletion types': (types?: UserDeletionTypeEntity[]) => ({ types }),

    'save user deletion types': (types: Maybe<UserDeletionTypeEntity>[]) => ({ types }),
    'save user deletion description': (description: Maybe<string>) => ({ description }),

    'delete user': (password: string | null | undefined) => ({ password }),
    'user deleted': (userDeleted: Maybe<boolean>) => ({ userDeleted }),

    'get suburbs': emptyProps(),
    'set suburbs': (result: SuburbEntity[]) => ({ result }), 

    'change password': (newPassword: string | null | undefined ) => ({ newPassword }),
    'password changed': (passwordChanged: Maybe<boolean>) => ({ passwordChanged }),
  }
});