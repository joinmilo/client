import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DeleteSurveyGQL } from '../../../api/generated/delete-survey.mutation.generated';
import { SponsorSurveyGQL } from '../../../api/generated/sponsor-survey.mutation.generated';

@Injectable()
export class SurveyAdminFormEffects {
  
  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private sponsorSurveyService: SponsorSurveyGQL,
    private deleteSurveyService: DeleteSurveyGQL,
    private store: Store,
  ) {}
}
