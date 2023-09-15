import { NgModule } from '@angular/core';
import { SurveyAdminDetailsLayoutModule } from './modules/layout/survey-admin-details-layout.module';
import { SurveyAdminDetailsRoutingModule } from './survey-admin-details-routing.module';

const modules = [
  SurveyAdminDetailsLayoutModule,
  SurveyAdminDetailsRoutingModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [],
})
export class SurveyAdminDetailsModule { }
