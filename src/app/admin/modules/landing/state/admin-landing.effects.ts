import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetDeveloperContactGQL } from 'src/app/admin/api/generated/get-developer-contact.generated';
import { GetMilestonesGQL } from 'src/app/admin/api/generated/get-milestones.query.generated';
import { GetNewsFeedsGQL } from 'src/app/admin/api/generated/get-news-feeds.query.generated';
import { ContactEntity, Maybe, MilestoneEntity } from 'src/app/core/api/generated/schema';
import { AdminLandingActions } from './admin-landing.actions';

@Injectable()
export class AdminLandingEffects {

  getDeveloperContact = createEffect(() => this.actions.pipe(
    ofType(AdminLandingActions.getDeveloperContact),
    switchMap((action) => this.getContactService.watch({
      entity: action.entity
    }).valueChanges),
    map(response => AdminLandingActions.setDeveloperContact(response.data.getContact as Maybe<ContactEntity>))
  ));

  getMilestones = createEffect(() => this.actions.pipe(
    ofType(AdminLandingActions.getMilestones),
    switchMap(() => this.getMilestonesService.watch(
      {
        params: {
          sort: 'endDate',
        }
      }
    ).valueChanges),
    map(response => AdminLandingActions.setMilestones(response.data.getMilestones?.result as Maybe<MilestoneEntity[]>))
  ));

  constructor(
    private actions: Actions,
    private getContactService: GetDeveloperContactGQL,
    private getNewsFeedService: GetNewsFeedsGQL,
    private getMilestonesService: GetMilestonesGQL,
  ) { }
}
