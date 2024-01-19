import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContestAdminTypeFormComponent } from '../type-form/components/contest-admin-type-form.component';
import { ContestAdminTypesComponent } from './component/contest-admin-types.component';

const routes: Routes = [
  {
    path: '',
    component: ContestAdminTypesComponent,
  },
  {
    path: 'form',
    component: ContestAdminTypeFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestAdminTypesRoutingModule { }
