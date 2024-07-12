import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ContestTypeEntity } from 'src/app/core/api/generated/schema';
import { GetContestTypesGQL } from '../api/generated/get-contest-types.query.generated';
import { ContestFilterActions } from './contest-filter.actions';

@Injectable()
export class ContestFilterEffects {

  getTypes = createEffect(() => this.actions.pipe(
    ofType(ContestFilterActions.getTypes),
    switchMap(() => this.getTypesService.watch().valueChanges),
    map(response => ContestFilterActions.setTypes(response.data.getContestTypes?.result as ContestTypeEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getTypesService: GetContestTypesGQL,
  ) { }
}
