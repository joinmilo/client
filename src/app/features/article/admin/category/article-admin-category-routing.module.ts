import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleAdminCategoryComponent } from './component/article-admin-category.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleAdminCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleAdminCategoryRoutingModule { }
