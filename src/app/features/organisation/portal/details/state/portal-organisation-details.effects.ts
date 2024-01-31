import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { Maybe, OrganisationCommentEntity, OrganisationEntity, OrganisationRatingEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { PortalActions } from 'src/app/portal/state/portal.actions';
import { GetOrganisationCommentsGQL } from '../../../api/generated/get-organisation-comments.query.generated';
import { GetOrganisationDetailsGQL } from '../../../api/generated/get-organisation-details.query.generated';
import { SaveOrganisationCommentGQL } from '../../../api/generated/save-organisation-comment.mutation.generated';
import { SaveOrganisationRatingGQL } from '../../../api/generated/save-organisation-rating.mutation.generated';
import { PortalOrganisationDetailsActions } from './portal-organisation-details.actions';
import { selectOrganisationDetails, selectOrganisationUserRating } from './portal-organisation-details.selectors';

@Injectable()
export class PortalOrganisationDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(PortalOrganisationDetailsActions.getDetails),
    switchMap((action) => this.getOrganisationService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getOrganisation?.id
      ? PortalOrganisationDetailsActions.setDetails(response.data.getOrganisation as OrganisationEntity)
      : PortalActions.notFound())
  ));

  updateDetails = createEffect(() => this.actions.pipe(
    ofType(
      PortalOrganisationDetailsActions.organisationRatingSaved,
      PortalOrganisationDetailsActions.organisationCommentSaved
      ),
    withLatestFrom(this.store.select(selectOrganisationDetails)),
    switchMap(([, organisationDetails]) => this.getOrganisationService.watch({
      entity: {
        slug: organisationDetails?.slug
      }
    }).valueChanges),
    map(response => response.data.getOrganisation?.id
      ? PortalOrganisationDetailsActions.detailsUpdated(response.data.getOrganisation as OrganisationEntity)
      : PortalActions.notFound())
  ));

  detailsUpdated = createEffect(() => this.actions.pipe(
    ofType(PortalOrganisationDetailsActions.detailsUpdated),
    map(() => CoreUserActions.updateUser())
  ));

  getComments = createEffect(() => this.actions.pipe(
    ofType(PortalOrganisationDetailsActions.getComments),
    switchMap(action => this.getCommentsService.watch({
      params: {
        sort: 'created',
        dir: 'desc',
        expression: {
          entity: {
            path: 'organisation.slug',
            operator: QueryOperator.Equal,
            value: action.slug
          }
        }
      },
    }).valueChanges),
    map(response => PortalOrganisationDetailsActions.setComments(response.data.getOrganisationComments?.result as Maybe<OrganisationCommentEntity[]>))
  ));

  saveOrganisationRating = createEffect(() => this.actions.pipe(
    ofType(PortalOrganisationDetailsActions.saveOrganisationRating),
    withLatestFrom(
      this.store.select(selectOrganisationDetails),
      this.store.select(selectCurrentUser),
      this.store.select(selectOrganisationUserRating),
    ),
    map(([action, organisation, user, rating]) => rating?.id
      ? { ...action.entity, id: rating.id }
      : { ...action.entity,
          parent: { id: organisation?.id },
          userContext: { id: user?.id}
        }
    ),
    switchMap((entity) => this.saveOrganisationRatingService.mutate({
      entity: entity
    })),
    map(response => PortalOrganisationDetailsActions.organisationRatingSaved(response.data?.saveOrganisationRating as OrganisationRatingEntity))
  ));

  organisationRatingSaved = createEffect(() => this.actions.pipe(
    ofType(PortalOrganisationDetailsActions.organisationRatingSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'ratingSaved'
    }))
  ));

  saveOrganisationComment = createEffect(() => this.actions.pipe(
    ofType(PortalOrganisationDetailsActions.saveOrganisationComment),
    withLatestFrom(
      this.store.select(selectOrganisationDetails),
      this.store.select(selectCurrentUser),
    ),
    map(([action, organisation, user]) => (
      {
        ...action.entity,
        organisation: { id: organisation?.id },
        userContext: { id: user?.id }
      }
    )),
    switchMap(entity => this.saveOrganisationCommentService.mutate({
      entity
    })),
    map(response => PortalOrganisationDetailsActions.organisationCommentSaved(response.data?.saveOrganisationComment as OrganisationCommentEntity))
  ));

  organisationCommentSaved = createEffect(() => this.actions.pipe(
    ofType(PortalOrganisationDetailsActions.organisationCommentSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'commentSaved'
    }))
  ));

  constructor(
    private store: Store,
    private actions: Actions,
    private getOrganisationService: GetOrganisationDetailsGQL,
    private getCommentsService: GetOrganisationCommentsGQL,
    private saveOrganisationCommentService: SaveOrganisationCommentGQL,
    private saveOrganisationRatingService: SaveOrganisationRatingGQL,
  ) { }
}
