import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAdminCategoryFormComponent } from './components/event-admin-category-form.component';


const routes: Routes = [
  {
    path: '',
    component: EventAdminCategoryFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminCategoryFormRoutingModule { }
