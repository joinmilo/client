import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalSurveyDetailsComponent } from './components/portal-survey-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalSurveyDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalSurveyDetailsRoutingModule { }
