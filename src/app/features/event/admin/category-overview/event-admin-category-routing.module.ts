import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAdminCategoryComponent } from './component/event-admin-category.component';

const routes: Routes = [
  {
    path: '',
    component: EventAdminCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminCategoryRoutingModule { }
