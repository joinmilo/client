
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
import { PortalGuestArticleSuccessComponent } from 'src/app/features/guest-article/portal/main/components/success/portal-guest-article-success.component';
import { portalGuestArticleStateKey } from 'src/app/features/guest-article/portal/main/constants/portal-guest-article.constants';
import { PortalGuestArticleRoutingModule } from 'src/app/features/guest-article/portal/main/portal-guest-article-routing.module';
import { PortalGuestArticleEffects } from 'src/app/features/guest-article/portal/main/state/portal-guest-article.effects';
import { portalGuestArticleReducer } from 'src/app/features/guest-article/portal/main/state/portal-guest-article.reducer';
import { CaptchaModule } from 'src/app/shared/form/captcha/captcha.module';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { SuccessComponent } from 'src/app/shared/layout/success/success.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaModule } from 'src/app/shared/widgets/media/media.module';
import { PortalGuestArticleFormComponent } from './components/form/portal-guest-article-form.component';


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
  MediaModule,
  PortalGuestArticleRoutingModule,
  SuccessComponent,
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
