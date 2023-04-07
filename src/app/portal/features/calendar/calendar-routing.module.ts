import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalCalendarComponent } from './components/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: PortalCalendarComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarPortalRoutingModule { }
