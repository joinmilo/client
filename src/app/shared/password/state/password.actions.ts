import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'src/schema/schema';

export const PasswordActions = createActionGroup({
  source: 'Password',
  events: {
    'check password': (password: Maybe<string>) => ({ password }),
    'set entropy': (entropy: number | null | undefined) => ({entropy}),
  },
});




