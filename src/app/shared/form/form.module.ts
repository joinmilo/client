import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from 'src/app/core/core.module';
import { CkEditorFormComponent } from './components/ck-editor/ck-editor.form.component';
import { PrivacyPolicyFormComponent } from './components/privacy-policy/privacy-policy.form.component';
import { RadioButtonGroupComponent } from './components/radio-button-group/radio-button-group.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';


const components = [
  CkEditorFormComponent,
  RadioButtonComponent,
  RadioButtonGroupComponent,
  PrivacyPolicyFormComponent,
];

const framework = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatSlideToggleModule
];

const modules = [
  CoreModule,
];

const libs = [
  CKEditorModule,
  FontAwesomeModule,
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