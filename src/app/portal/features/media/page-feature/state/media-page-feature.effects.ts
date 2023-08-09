import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetInfoMediaGQL, InfoMediaEntity } from 'src/schema/schema';
import { MediaPageFeatureActions } from './media-page-feature.actions';

@Injectable()
export class MediaPageFeatureEffects {

  getRecentMedia = createEffect(() => this.actions.pipe(
    ofType(MediaPageFeatureActions.getRecentMedia),
    switchMap(() => this.getMediaService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => MediaPageFeatureActions.setRecentMedia(response.data.getInfoMedia?.result as InfoMediaEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getMediaService: GetInfoMediaGQL,
  ) {}
}
