import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';
import { GetMenuGQL, MenuItemEntity } from 'src/schema/schema';
import { PortalMenuActions } from './portal-menu.actions';

@Injectable()
export class PortalMenuEffects {

  ngrxOnInitEffects(): Action {
    return PortalMenuActions.init();
  }

  getMenu = createEffect(() => this.actions.pipe(
    ofType(
      PortalMenuActions.init,
      PortalMenuActions.getMenu),
    switchMap(action => this.getMenuService.watch({
      parent: (action as ({ parentId: string })).parentId
    }).valueChanges),
    map(response => PortalMenuActions.setMenu(response.data.getMenuItems?.result as MenuItemEntity[]))
  ));

  navigateDetails = createEffect(() => this.actions.pipe(
    ofType(PortalMenuActions.navigateDetails),
    tap(action => this.router.navigate(['portal', action.feature?.key, action.feature?.id])),
  ), { dispatch: false });

  navigateMenu = createEffect(() => this.actions.pipe(
    ofType(PortalMenuActions.navigateMenu),
    tap(action => {
      if (action?.item?.feature?.key) {
        this.router.navigate(['portal', action.item.feature.key]);
      }

      if (action?.item?.page?.slug) {
        this.router.navigate([`/${action.item.page.slug}`]);
      }
    }),
  ), { dispatch: false });

  notFound = createEffect(() => this.actions.pipe(
    ofType(PortalMenuActions.notFound),
    tap(() => this.router.navigate(['/portal', '404'])),
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private getMenuService: GetMenuGQL,
    private router: Router,
  ) { }
}
