import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { SocialShareButtonComponent } from './share-button/social-share-button.component';
import { SocialShareDialogComponent } from './share-dialog/social-share-dialog.component';


const components = [
  SocialShareButtonComponent,
  SocialShareDialogComponent,
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

const libs = [
  FontAwesomeModule,
]

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...materials,
    ...libs,
  ],
  exports: [...components],
})
export class SocialShareModule { }