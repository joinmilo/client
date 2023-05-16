import { createActionGroup, emptyProps } from '@ngrx/store';

export const PasswordActions = createActionGroup({
  source: 'Password',
  events: {
    'set password strength': (rate: number) => ({ rate }),
    'reset password strength': emptyProps(),
  },
});




