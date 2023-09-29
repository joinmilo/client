import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaAdminCategoryFormComponent } from './components/media-admin-category-form.component';


const routes: Routes = [
  {
    path: '',
    component: MediaAdminCategoryFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaAdminCategoryFormRoutingModule { }
