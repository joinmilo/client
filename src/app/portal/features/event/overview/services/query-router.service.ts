import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { EventQueryParams } from 'src/app/shared/event-filter/typings/query-param';
import { ConjunctionOperator, FilterSortPaginateInput, QueryExpressionInput, QueryOperator } from 'src/schema/schema';
import { PortalEventOverviewActions } from '../state/portal-event-overview.actions';

@Injectable()
export class QueryRouterService {

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) { }

  public watch(): Observable<unknown> {
    return this.activatedRoute.queryParams
      .pipe(
        tap((queryParams: EventQueryParams) => {
        const params = this.empytParams(queryParams)
          ? {}
          : {
              expression: {
                conjunction: {
                  operands: [],
                }
              }
            } as FilterSortPaginateInput;

        if(queryParams.categories) {
          const operands = queryParams.categories.map(categoryId => ({
            path: 'category.id',
            operator: QueryOperator.Equal,
            value: categoryId
          })) as QueryExpressionInput[];
          
          params.expression?.conjunction?.operands?.push({
            conjunction: {
              operands,
              operator: ConjunctionOperator.Or
            }
          });
        }

        if(queryParams['current-only']) {
          params.expression?.conjunction?.operands?.push({
            entity: {
              path: 'schedules.startDate',
              operator: QueryOperator.GreaterOrEqual,
              value: new Date().toISOString()
            }
          });
        }

        if(queryParams['free-only']) {
          params.expression?.conjunction?.operands?.push({
            entity: {
              path: 'entryFee',
              operator: QueryOperator.Equal,
              value: null
            }
          });
        }

        if(queryParams.suburbs) {
          const operands = queryParams.suburbs.map(suburbId => ({
            path: 'address.suburb.id',
            operator: QueryOperator.Equal,
            value: suburbId
          })) as QueryExpressionInput[];

          params.expression?.conjunction?.operands?.push({
            conjunction: {
              operands,
              operator: ConjunctionOperator.Or
            }
          });
        }

        if(queryParams.targetgroups?.length) {
          const operands = typeof queryParams.targetgroups === 'string'
            ? [{
              entity: {
                path: 'targetGroups.id',
                operator: QueryOperator.Equal,
                value: queryParams.targetgroups
              }
            }] as QueryExpressionInput[]
            : queryParams.targetgroups.map(targetGroupId => ({
                path: 'targetGroups.id',
                operator: QueryOperator.Equal,
                value: targetGroupId
              })) as QueryExpressionInput[]

          params.expression?.conjunction?.operands?.push({
            conjunction: {
              operands,
              operator: ConjunctionOperator.Or
            }
          });
        }

        this.store.dispatch(PortalEventOverviewActions.setParams(params));
        })
      );
  }
  empytParams(queryParams: EventQueryParams): boolean {
    return !(queryParams.categories?.length
      && queryParams.targetgroups?.length
      && queryParams['current-only']?.length
      && queryParams['free-only']?.length
      && queryParams.suburbs?.length);

  }
  
}