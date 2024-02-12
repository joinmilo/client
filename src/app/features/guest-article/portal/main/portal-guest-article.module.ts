
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CaptchaModule } from 'ngx-cinlib/forms/captcha';
import { RichtextEditorFormComponent } from 'ngx-cinlib/forms/richtext';
import { FormStepComponent, FormStepperComponent } from 'ngx-cinlib/forms/stepper';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { GridColumnDirective, GridRowComponent } from 'ngx-cinlib/layouts/grid-layout';
import { PageTitleComponent } from 'ngx-cinlib/layouts/title';
import { CoreModule } from 'src/app/core/core.module';
import { PortalGuestArticleFormComponent } from './components/form/portal-guest-article-form.component';
import { PortalGuestArticleSuccessComponent } from './components/success/portal-guest-article-success.component';
import { portalGuestArticleStateKey } from './constants/portal-guest-article.constants';
import { PortalGuestArticleRoutingModule } from './portal-guest-article-routing.module';
import { PortalGuestArticleEffects } from './state/portal-guest-article.effects';
import { portalGuestArticleReducer } from './state/portal-guest-article.reducer';

const components = [
  PortalGuestArticleFormComponent,
  PortalGuestArticleSuccessComponent,
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

const modules = [
  CoreModule,
  PortalGuestArticleRoutingModule,
];

const libs = [
  StoreModule.forFeature(portalGuestArticleStateKey, portalGuestArticleReducer),
  EffectsModule.forFeature([PortalGuestArticleEffects]),

  CaptchaModule,
  FormStepComponent,
  FormStepperComponent,
  GridColumnDirective,
  GridRowComponent,
  IconComponent,
  I18nDirective,
  PageTitleComponent,
  RichtextEditorFormComponent,
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
export class PortalGuestArticleModule { }
