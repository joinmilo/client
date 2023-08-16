import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LogoComponent } from './components/logo/logo.component';
import { appStateKey } from './constants/core.constants';
import { HtmlDirective } from './directives/html.directive';
import { LabelDirective } from './directives/label.directive';
import { AddressPipe } from './pipes/address.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { StripTagsPipe } from './pipes/strip-tags.pipe';
import { TranslatablePipe } from './pipes/translatable.pipe';
import { TruncateWordsPipe } from './pipes/truncate-words.pipe';
import { CoreUserEffects } from './state/effects/core-user.effects';
import { CoreEffects } from './state/effects/core.effects';
import { appReducers, localStorageMetaReducer } from './state/reducers/reducer';

const components = [
  FeedbackComponent,
  LogoComponent,
];

const directives = [
  LabelDirective,
  HtmlDirective,
];

const pipes = [
  AddressPipe,
  FileSizePipe,
  FilterPipe,
  StripTagsPipe,
  TranslatablePipe,
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
  MatSnackBarModule,
];

const libs = [
  FontAwesomeModule,
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
export class CoreModule {

  public constructor(
    iconLibrary: FaIconLibrary
  ) {
    iconLibrary.addIconPacks(fab, far, fas);
  }
}


