import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetPageGQL, PageEntity } from 'src/schema/schema';
import { PortalMenuActions } from '../../shared/menu/state/portal-menu.actions';
import { PortalMainActions } from './portal-main.actions';

@Injectable()
export class PortalMainEffects {

  getPage = createEffect(() => this.actions.pipe(
    ofType(PortalMainActions.getPage),
    switchMap((action) => this.getPageService.watch({ slug: action.slug }).valueChanges),
    map(response => response.data.getPage?.id
      ? PortalMainActions.setCurrentPage(response.data.getPage as PageEntity)
      : PortalMenuActions.notFound())
  ));

  getLandingPage = createEffect(() => this.actions.pipe(
    ofType(PortalMainActions.getLandingPage),
    switchMap(() => this.getPageService.watch({ isLanding: true }).valueChanges),
    map(response => PortalMainActions.setCurrentPage(response.data.getPage as PageEntity))
  ));

  constructor(
    private actions: Actions,
    private getPageService: GetPageGQL,
  ) {}
}
