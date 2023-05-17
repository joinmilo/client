import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalSurveyOverviewComponent } from './components/overview/portal-survey-overview.component';

const routes: Routes = [
  {
    path: '',
    component: PortalSurveyOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalSurveyOverviewRoutingModule {}
