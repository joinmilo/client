import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { NavigatorPageEntity } from 'src/app/core/api/generated/schema';
import { GetNavigatorPageGQL } from 'src/app/features/navigator/api/generated/get-navigator-page.query.generated';
import { GetNavigatorStartPageGQL } from 'src/app/features/navigator/api/generated/get-navigator-start-page.query.generated';
import { NavigatorPortalQuestionsActions } from './navigator-portal-questions.actions';

@Injectable()
export class NavigatorPortalQuestionsEffects {
  
  getStartPage = createEffect(() => this.actions.pipe(
    ofType(NavigatorPortalQuestionsActions.getStartPage),
    switchMap( () => this.getNavigatorStartPageService.watch().valueChanges),
    filter(response => !!response.data.getNavigatorStartPage?.id),
    map(response => NavigatorPortalQuestionsActions.setStartPage(response.data.getNavigatorStartPage as NavigatorPageEntity))
    ));
    
  getPage = createEffect(() => this.actions.pipe(
    ofType(NavigatorPortalQuestionsActions.getPage),
     switchMap((action) => this.getNavigatorPageService.watch({
       entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getNavigatorPage?.id
       ? NavigatorPortalQuestionsActions.setPage(response.data.getNavigatorPage as NavigatorPageEntity)
       : AdminActions.notFound())
   ));

  constructor(
    private actions: Actions,
    private getNavigatorStartPageService: GetNavigatorStartPageGQL,
    private getNavigatorPageService: GetNavigatorPageGQL

  ) {}
}
