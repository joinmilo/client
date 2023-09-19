import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestArticleAdminPublicAuthorsComponent } from './component/guest-article-admin-authors.component';

const routes: Routes = [
  {
    path: '',
    component: GuestArticleAdminPublicAuthorsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestArticleAdminPublicAuthorsRoutingModule { }
