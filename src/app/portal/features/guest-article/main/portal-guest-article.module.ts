
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CaptchaModule } from 'src/app/shared/captcha/captcha.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalGuestArticleFormComponent } from './components/form/portal-guest-article-form.component';
import { portalGuestArticleStateKey } from './constants/portal-guest-article.constants';
import { PortalGuestArticleRoutingModule } from './portal-guest-article-routing.module';
import { PortalGuestArticleEffects } from './state/portal-guest-article.effects';
import { portalGuestArticleReducer } from './state/portal-guest-article.reducer';

const components = [
  PortalGuestArticleFormComponent
];

const framework = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatExpansionModule,
];

const modules = [
  CoreModule,
  CaptchaModule,
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
