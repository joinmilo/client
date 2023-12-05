import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PageEntity } from 'src/app/core/api/generated/schema';

import { GetPageGQL } from 'src/app/portal/api/generated/get-page.query.generated';
import { PortalActions } from '../../../state/portal.actions';
import { PortalPageActions } from './portal-page.actions';

@Injectable()
export class PortalPageEffects {

  getPage = createEffect(() => this.actions.pipe(
    ofType(PortalPageActions.getPage),
    switchMap((action) => this.getPageService.watch({ slug: action.slug }).valueChanges),
    map(response => response.data.getPage?.id
      ? PortalPageActions.setPage(response.data.getPage as PageEntity)
      : PortalActions.notFound())
  ));

  getLandingPage = createEffect(() => this.actions.pipe(
    ofType(PortalPageActions.getLandingPage),
    switchMap(() => this.getPageService.watch({ isLanding: true }).valueChanges),
    map(response => PortalPageActions.setPage(response.data.getPage as PageEntity))
  ));


  constructor(
    private actions: Actions,
    private getPageService: GetPageGQL,
  ) {}
}
