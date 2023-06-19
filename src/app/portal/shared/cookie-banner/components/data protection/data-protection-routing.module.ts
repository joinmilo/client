import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './components/data-protection.component';

const routes: Routes = [
  {
    path: '',
    component: DataProtectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataProtectionRoutingModule { }
