import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetPageGQL, PageEntity } from 'src/schema/schema';
import { PortalMenuActions } from '../../shared/menu/state/portal-menu.actions';
import { PageActions } from './page.actions';

@Injectable()
export class PageEffects {

  getPage = createEffect(() => this.actions.pipe(
    ofType(PageActions.getPage),
    switchMap((action) => this.getPageService.watch({ slug: action.slug }).valueChanges),
    map(response => response.data.getPage?.id
      ? PageActions.setCurrentPage(response.data.getPage as PageEntity)
      : PortalMenuActions.notFound())
  ));

  getLandingPage = createEffect(() => this.actions.pipe(
    ofType(PageActions.getLandingPage),
    switchMap(() => this.getPageService.watch({ isLanding: true }).valueChanges),
    map(response => PageActions.setCurrentPage(response.data.getPage as PageEntity))
  ));

  constructor(
    private actions: Actions,
    private getPageService: GetPageGQL,
  ) {}
}
