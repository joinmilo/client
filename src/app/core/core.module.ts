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
import { IconComponent } from '../shared/widgets/icon/icon.component';
import { AsideComponent } from './components/aside/aside.component';
import { CookieComponent } from './components/cookie/cookie.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HelpComponent } from './components/help/help.component';
import { LogoComponent } from './components/logo/logo.component';
import { appStateKey } from './constants/core.constants';
import { AsideDirective } from './directives/aside.directive';
import { HtmlDirective } from './directives/html.directive';
import { LabelDirective } from './directives/label.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { AddressPipe } from './pipes/address.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LocalDatePipe } from './pipes/localDate.pipe ';
import { StripTagsPipe } from './pipes/strip-tags.pipe';
import { TranslatablePipe } from './pipes/translatable.pipe';
import { TruncateWordsPipe } from './pipes/truncate-words.pipe';
import { CoreUserEffects } from './state/effects/core-user.effects';
import { CoreEffects } from './state/effects/core.effects';
import { appReducers, localStorageMetaReducer } from './state/reducers/reducer';

const components = [
  AsideComponent,
  CookieComponent,
  FeedbackComponent,
  HelpComponent,
  LogoComponent,
];

const directives = [
  AsideDirective,
  LabelDirective,
  HtmlDirective,
  TooltipDirective,
];

const pipes = [
  AddressPipe,
  FileSizePipe,
  FilterPipe,
  StripTagsPipe,
  TranslatablePipe,
  TruncateWordsPipe,
  LocalDatePipe
];

const framework = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
];

const materials = [
  LayoutModule,
  IconComponent,
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTooltipModule,
];

const libs = [
  StoreModule.forFeature(appStateKey, {
    core: appReducers.core,
    coreUser: localStorageMetaReducer(appReducers.coreUser),
  }),
  EffectsModule.forFeature([CoreEffects, CoreUserEffects])
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes,
  ],
  imports: [
    ...framework,
    ...materials,
    ...libs
  ],
  exports: [
    ...components,
    ...directives,
    ...pipes,
  ],
})
export class CoreModule { }


