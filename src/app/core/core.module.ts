import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { ConfirmService } from 'ngx-cinlib/modals/confirm';
import { FeedbackComponent, FeedbackService } from 'ngx-cinlib/modals/feedback';
import { CookieComponent } from './components/cookie/cookie.component';
import { HelpComponent } from './components/help/help.component';
import { LogoComponent } from './components/logo/logo.component';
import { appStateKey } from './constants/core.constants';
import { FilterPipe } from './pipes/filter.pipe';
import { StripTagsPipe } from './pipes/strip-tags.pipe';
import { TruncateWordsPipe } from './pipes/truncate-words.pipe';
import { CoreUserEffects } from './state/effects/core-user.effects';
import { CoreEffects } from './state/effects/core.effects';
import { appReducers, localStorageMetaReducer } from './state/reducers/reducer';

const components = [
  CookieComponent,
  HelpComponent,
  LogoComponent,
];

const pipes = [
  FilterPipe,
  StripTagsPipe,
  TruncateWordsPipe,
];

const framework = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  LayoutModule,
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTooltipModule,
];

const libs = [
  EffectsModule.forFeature([CoreEffects, CoreUserEffects]),
  StoreModule.forFeature(appStateKey, {
    core: appReducers.core,
    coreUser: localStorageMetaReducer(appReducers.coreUser),
  }),

  FeedbackComponent,
  IconComponent,
  I18nDirective,
];

const providers = [
  ConfirmService,
  FeedbackService,
];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
  ],
  imports: [
    ...framework,
    ...materials,
    ...libs
  ],
  exports: [
    ...components,
    ...pipes,
  ],
  providers: [
    ...providers,
  ]
})
export class CoreModule { }


