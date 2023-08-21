import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyAdminOverviewComponent } from './component/survey-admin-overview.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyAdminOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyAdminOverviewRoutingModule { }
