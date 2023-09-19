import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaAdminCategoryComponent } from './component/media-admin-category.component';

const routes: Routes = [
  {
    path: '',
    component: MediaAdminCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaAdminCategoryRoutingModule { }
