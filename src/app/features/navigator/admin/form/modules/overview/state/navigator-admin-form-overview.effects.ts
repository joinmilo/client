import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { NavigatorPageEntity } from 'src/app/core/api/generated/schema';
import { GetNavigatorPageGQL } from 'src/app/features/navigator/api/generated/get-navigator-page.query.generated';
import { GetNavigatorStartPageGQL } from 'src/app/features/navigator/api/generated/get-navigator-start-page.query.generated';
import { NavigatorAdminFormOverviewActions } from './navigator-admin-form-overview.actions';


@Injectable()
export class NavigatorAdminFormOverviewEffects {

  getStartPage = createEffect(() => this.actions.pipe(
    ofType(NavigatorAdminFormOverviewActions.getStartPage),
    switchMap( () => this.getNavigatorStartPageService.watch().valueChanges),
    filter(response => !!response.data.getNavigatorStartPage?.id),
    map(response => NavigatorAdminFormOverviewActions.setStartPage(response.data.getNavigatorStartPage as NavigatorPageEntity))
    ));
    
  getPage = createEffect(() => this.actions.pipe(
    ofType(NavigatorAdminFormOverviewActions.getPage),
     switchMap((action) => this.getNavigatorPageService.watch({
       entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getNavigatorPage?.id
       ? NavigatorAdminFormOverviewActions.setPage(response.data.getNavigatorPage as NavigatorPageEntity)
       : AdminActions.notFound())
   ));

  constructor(
    private actions: Actions,
    private getNavigatorStartPageService: GetNavigatorStartPageGQL,
    private getNavigatorPageService: GetNavigatorPageGQL

  ) {}
}
