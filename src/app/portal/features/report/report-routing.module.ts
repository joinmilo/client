import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportInputComponent } from './pages/report-input/report-input.component';

const routes: Routes = [

  {
    path: ``,
    component: ReportInputComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportPortalRoutingModule { }
