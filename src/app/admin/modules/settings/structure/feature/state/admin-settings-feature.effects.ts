import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { GetFeaturesGQL } from 'src/app/admin/api/generated/get-features.query.generated';
import { SaveFeatureGQL } from 'src/app/admin/api/generated/save-feature.mutation.generated';
import { PageableList_FeatureEntity } from 'src/app/core/api/generated/schema';
import { ConfirmChangeComponent } from 'src/app/shared/dialogs/confirm-change/confirm-change.component';
import { AdminSettingsFeatureActions } from './admin-settings-feature.actions';
import { selectParams } from './admin-settings-feature.selectors';

@Injectable()
export class AdminSettingsFeatureEffects {
  updateParams = createEffect(() =>
    this.actions.pipe(
      ofType(
        AdminSettingsFeatureActions.updateParams,
        AdminSettingsFeatureActions.featureToggled
      ),
      withLatestFrom(this.store.select(selectParams)),
      switchMap(
        ([, params]) =>
          this.getFeaturesService.watch({
            params,
          }).valueChanges
      ),
      map((response) =>
        AdminSettingsFeatureActions.setOverviewData(
          response.data.getFeatures as PageableList_FeatureEntity
        )
      )
    )
  );

  togglePublic = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsFeatureActions.toggleFeature),
      map(action => ({
        id: action.feature?.id,
        active: !action.feature?.active,
      })),
      switchMap(feature => this.dialog.open(ConfirmChangeComponent, {
          data: feature.active
            ? 'thisWillActivateFeature'
            : 'cautionThisWillDeactivateFeature'
        }).afterClosed().pipe(
          switchMap(confirmed => confirmed
            ? of(feature)
            : EMPTY
          )
        )
      ),
      switchMap(entity => this.saveFeatureService.mutate({
        entity
      })),
      map(() => AdminSettingsFeatureActions.featureToggled())
    )
  );

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private getFeaturesService: GetFeaturesGQL,
    private saveFeatureService: SaveFeatureGQL,
    private store: Store
  ) {}
}
