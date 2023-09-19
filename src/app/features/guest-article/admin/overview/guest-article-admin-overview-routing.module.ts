import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestArticleAdminOverviewComponent } from './component/guest-article-admin-overview.component';

const routes: Routes = [
  {
    path: '',
    component: GuestArticleAdminOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestArticleAdminOverviewRoutingModule { }
