import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, FilterSortPaginateInput, Maybe, OrganisationEntity, OrganisationMemberEntity, QueryOperator, UserContextEntity } from 'src/app/core/api/generated/schema';
import { userUrl } from 'src/app/core/constants/module.constants';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { GetOrganisationsGQL } from 'src/app/user/api/generated/get-organisations.query.generated';
import { SaveOrganisationApplicationGQL } from 'src/app/user/api/generated/save-organisation-application.mutation.generated';
import { SaveOrganisationMembersGQL } from 'src/app/user/api/generated/save-organisation-members.mutation.generated';
import { SaveUserContextGQL } from 'src/app/user/api/generated/save-user-context.mutation.generated';
import { VerifyAddressGQL } from 'src/app/user/api/generated/verify-address.mutation.generated';
import { PortalParticipateActions } from './portal-participate.actions';

@Injectable()
export class PortalParticipateEffects {

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.getOrganisations),
    withLatestFrom(this.store.select(selectCurrentUser)),

    map(([action, user]) => ({
      sort: 'modified',
      dir: 'desc',
      search: action.query,

      expression: {
        conjunction: {
          operands: [
            {
              conjunction: {
                operator: ConjunctionOperator.And,
                operands: [
                  {
                    entity: {
                      path: 'members.userContext.id',
                      operator: QueryOperator.NotEqual,
                      value: user?.id,
                    },
                  },
                  {
                    entity: {
                      path: 'approved',
                      operator: QueryOperator.Equal,
                      value: true,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    } as FilterSortPaginateInput)),
    switchMap((params) => this.getOrganisationsService.watch({ params }).valueChanges),
    map(response => PortalParticipateActions.setOrganisations(response.data.getOrganisations?.result as Maybe<OrganisationEntity[]>))
  ));

  saveOrganisationRequests = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.sendOrganisationRequests),
    switchMap((action) => this.saveOrganisationMembersService.mutate({
      entities: action.organisationRequests
    })),
    map((response) => PortalParticipateActions.organisationRequestsSent(response.data?.saveOrganisationMembers as Maybe<OrganisationMemberEntity[]>))
  ));

  OrganisationRequestsSent = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.organisationRequestsSent),
    tap(() => this.router.navigate(['/', userUrl, 'participate', 'success-join-organisation'])),
  ), {dispatch: false});



  saveAuthorApplication = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.saveAuthorApplication),
    switchMap((action) => this.saveUserContextService.mutate({
      entity: action.entity
    })),
    map(response => PortalParticipateActions.authorApplicationSaved(response.data?.saveUserContext as UserContextEntity))
  ));

  authorApplicationSaved = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.authorApplicationSaved),
    tap(() => this.router.navigate(['/', userUrl, 'participate', 'success-become-author'])),
  ), {dispatch: false});



  saveOrganisationApplication = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.saveOrganisationApplication),
      switchMap(action => this.verifyAddressService.mutate({
          entity: action.entity.address
        })
        .pipe(
          filter(response => !!response.data?.verifyAddress?.latitude),
          map(response => ({ ...action.entity, address: response.data?.verifyAddress, }))
        ),
      ),
    switchMap(entity => this.saveOrganisationApplicationService.mutate({
      entity
    })),
    map(response => PortalParticipateActions.organisationApplicationSaved(response.data?.saveOrganisation as OrganisationEntity))
  ));

  organisationApplicationSaved = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.organisationApplicationSaved),
    tap(() => this.router.navigate(['/', userUrl, 'participate', 'success-create-organisation'])),
  ), {dispatch: false});



  constructor(
    private actions: Actions,
    private getOrganisationsService: GetOrganisationsGQL,
    private router: Router,
    private saveOrganisationApplicationService: SaveOrganisationApplicationGQL,
    private saveOrganisationMembersService: SaveOrganisationMembersGQL,
    private saveUserContextService: SaveUserContextGQL,
    private store: Store,
    private verifyAddressService: VerifyAddressGQL,
  ) {}

}
