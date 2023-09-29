import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleAdminCategoryFormComponent } from './components/article-admin-category-form.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleAdminCategoryFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleAdminCategoryFormRoutingModule { }
