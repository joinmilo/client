import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CheckPasswordGQL } from 'src/schema/schema';
import { PasswordActions } from './password.actions';


@Injectable()
export class PasswordEffects {

  checkPassword = createEffect(() => this.actions.pipe(
    ofType(PasswordActions.checkPassword),
    switchMap((action) => this.checkPasswordService.mutate({
      password: action.password
    })),
    map(response => PasswordActions.setEntropy(response.data?.checkPassword))
  ));

  constructor(
    private actions: Actions,
    private checkPasswordService: CheckPasswordGQL
    ) { }
}
