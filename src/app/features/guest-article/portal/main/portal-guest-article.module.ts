
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CaptchaModule } from 'src/app/shared/form/captcha/captcha.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
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
  CaptchaModule,
  CkEditorFormComponent,
  FormStepperModule,
  GridLayoutModule,
  MediaWidgetsModule,
  PortalGuestArticleRoutingModule,
  TitleModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalGuestArticleStateKey, portalGuestArticleReducer),
  EffectsModule.forFeature([PortalGuestArticleEffects]),
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
