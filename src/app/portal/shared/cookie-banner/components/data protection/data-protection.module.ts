import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { DataProtectionComponent } from './components/data-protection.component';
import { DataProtectionRoutingModule } from './data-protection-routing.module';


const components = [
  DataProtectionComponent,
];

const framework = [
  CommonModule,
];

const materials = [ 
  MatButtonModule,
];

const modules = [
  CoreModule,
  DataProtectionRoutingModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...modules,
    ...libs,
  ],
  exports: [...components],
})
export class DataProtectionModule { }
