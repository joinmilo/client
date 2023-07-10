import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ConjunctionOperator, ContestEntity, FilterSortPaginateInput, GetContestGQL, GetContestsGQL, Maybe, QueryExpressionInput, QueryOperator } from 'src/schema/schema';
import { PortalContestOverviewActions } from './portal-contest-overview.actions';

@Injectable()
export class PortalContestOverviewEffects {

  getSponsoredContest = createEffect(() => this.actions.pipe(
    ofType(PortalContestOverviewActions.getSponsoredContest),
    switchMap(() => this.getContestService.watch({ 
      entity: {
        sponsored: true
      }
    }).valueChanges),
    map(response => PortalContestOverviewActions.setSponsoredContest(response.data.getContest as ContestEntity))
  ));

  getActiveContest = createEffect(() => this.actions.pipe(
    ofType(PortalContestOverviewActions.updateParams),
    map(action => {
      const activeQuery = {
        sort: 'modified',
          dir: 'desc',
          expression: {
            conjunction: {
              operands: [
                {
                  entity: {
                    path: 'contestEndDate',
                    operator: QueryOperator.GreaterOrEqual,
                    value: new Date().toISOString()
                  }
                }
              ]
            }
          }
        } as FilterSortPaginateInput;

        activeQuery?.expression?.conjunction?.operands?.push(action.params.expression as QueryExpressionInput)

        return activeQuery;
    }),
    switchMap(params => this.getContestsService.watch({params}).valueChanges),
    map(response => PortalContestOverviewActions.setActiveContests(response.data.getContests?.result as Maybe<ContestEntity[]>))
  ))

  getCompletedContests = createEffect(() => this.actions.pipe(
    ofType(PortalContestOverviewActions.updateParams),
    map(action => {
      const completedQuery = {
        sort: 'modified',
        dir: 'desc',
        expression: {
          conjunction: {
            operands: [
              {
                entity: {
                  path: 'voteEndDate',
                  operator: QueryOperator.LessThan,
                  value: new Date().toISOString()
                }
              }
            ]
          }
        }
      } as FilterSortPaginateInput;

      completedQuery?.expression?.conjunction?.operands?.push(action.params.expression as QueryExpressionInput)

      return completedQuery;

    }),
    switchMap(params => this.getContestsService.watch({params}).valueChanges),
    map(response => PortalContestOverviewActions.setCompletedContests(response.data.getContests?.result as Maybe<ContestEntity[]>))
  ));

  getVoteableContests = createEffect(() => this.actions.pipe(
    ofType(PortalContestOverviewActions.updateParams),
    map(action => {
      const voteableQuery = {
        sort: 'modified',
        dir: 'desc',
        expression: {
          conjunction: {
            operands: [
              {
                conjunction: {
                  operator: ConjunctionOperator.And,
                  operands: [
                    {
                      entity: {
                        path: 'contestEndDate',
                        operator: QueryOperator.LessThan,
                        value: new Date().toISOString()
                      }
                    },
                    {
                      entity: {
                        path: 'voteEndDate',
                        operator: QueryOperator.GreaterOrEqual,
                        value: new Date().toISOString()
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      } as FilterSortPaginateInput;

      voteableQuery?.expression?.conjunction?.operands?.push(action.params.expression as QueryExpressionInput)

      return voteableQuery;

    }),
    switchMap(params => this.getContestsService.watch({params}).valueChanges),
    map(response => PortalContestOverviewActions.setVoteableContests(response.data.getContests?.result as Maybe<ContestEntity[]>))
  ));

  constructor(
    private actions: Actions,
    private getContestService: GetContestGQL,
    private getContestsService: GetContestsGQL,
  ) {}
}
