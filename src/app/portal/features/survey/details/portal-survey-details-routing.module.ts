import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalSurveyDetailsMediaComponent } from './components/media/portal-survey-details-media.component';
import { PortalSurveyDetailsComponent } from './components/portal-survey-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortalSurveyDetailsComponent
  },
  {
    path: 'media',
    component: PortalSurveyDetailsMediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalSurveyDetailsRoutingModule { }
