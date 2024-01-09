import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ContestCommentEntity, Maybe, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetContestCommentsGQL } from 'src/app/features/contest/api/generated/get-contest-comments.query.generated';
import { ContestPortalDetailsCommentsActions } from './contest-portal-details-comments.actions';

@Injectable()
export class ContestPortalDetailsCommentsEffects {

  getComments = createEffect(() => this.actions.pipe(
    ofType(ContestPortalDetailsCommentsActions.getComments),
    switchMap(action => this.getCommentsService.watch({
      params: {
        sort: 'created',
        dir: 'desc',
        expression: {
          entity: {
            path: 'contest.slug',
            operator: QueryOperator.Equal,
            value: action.slug
          }
        }
      },
    }).valueChanges),
    map(response => ContestPortalDetailsCommentsActions.setComments(response.data.getContestComments?.result as Maybe<ContestCommentEntity[]>))
  ));

  constructor(
    private actions: Actions,
    private getCommentsService: GetContestCommentsGQL,
  ) { }
}
