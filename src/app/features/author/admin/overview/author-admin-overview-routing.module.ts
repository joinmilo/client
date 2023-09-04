import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorAdminOverviewComponent } from './component/author-admin-overview.component';


const routes: Routes = [
  {
    path: '',
    component: AuthorAdminOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorAdminOverviewRoutingModule { }
