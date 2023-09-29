import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealAdminCategoryFormComponent } from './components/deal-admin-category-form.component';



const routes: Routes = [
  {
    path: '',
    component: DealAdminCategoryFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealAdminCategoryFormRoutingModule { }
