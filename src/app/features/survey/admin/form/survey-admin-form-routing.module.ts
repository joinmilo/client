import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyAdminFormComponent } from './component/survey-admin-form.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyAdminFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyAdminFormRoutingModule { }
