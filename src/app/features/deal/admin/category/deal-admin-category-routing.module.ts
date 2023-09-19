import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealAdminCategoryComponent } from './component/deal-admin-category.component';

const routes: Routes = [
  {
    path: '',
    component: DealAdminCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealAdminCategoryRoutingModule { }
