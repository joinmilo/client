import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
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

const materials = [
  MatButtonModule,
  ShareButtonsModule,
  ShareIconsModule,
  MatDialogModule,
];

const modules = [
  CoreModule,
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
export class ShareModule { }