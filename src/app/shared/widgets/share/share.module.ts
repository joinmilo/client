import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { IconComponent } from 'ngx-cinlib/icons';
import { ShareModule as LibShareModule } from 'ngx-sharebuttons';
import { CoreModule } from 'src/app/core/core.module';
import { ShareButtonComponent } from './button/share-button.component';
import { ShareDialogComponent } from './dialog/share-dialog.component';

const components = [
  ShareButtonComponent,
  ShareDialogComponent,
];

const framework = [
  CommonModule,
];

const lib = [
  LibShareModule
];

const materials = [
  MatButtonModule,
  MatDialogModule,
];

const modules = [
  CoreModule,
  IconComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...lib,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class ShareModule { }