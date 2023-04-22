import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { CoreModule } from 'src/app/core/core.module';
import { CkEditorFormComponent } from './components/ck-editor/ck-editor.form.component';
import { HcaptchaFormComponent } from './components/hcaptcha/hcaptcha.form.component';
import { PrivacyPolicyFormComponent } from './components/privacy-policy/privacy-policy.form.component';
import { RadioButtonGroupComponent } from './components/radio-button-group/radio-button-group.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';


const components = [
  CkEditorFormComponent,
  HcaptchaFormComponent,
  RadioButtonComponent,
  RadioButtonGroupComponent,
  PrivacyPolicyFormComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatCardModule,
  MatButtonModule,
  MatChipsModule,
  MatSlideToggleModule,
];

const modules = [
  CoreModule,
];

const libs = [
  CKEditorModule,
  FontAwesomeModule,
  NgHcaptchaModule.forRoot({
    languageCode: 'de' //TODO
  }),
];

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
export class FormModule { }