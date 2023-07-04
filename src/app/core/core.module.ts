import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule, NgOptimizedImage } from '@angular/common';
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
import { AddressPieceComponent } from './components/pieces/adress/address-piece.component';
import { CategoryPieceComponent } from './components/pieces/category/category-piece.component';
import { DatePieceComponent } from './components/pieces/date/date-piece.component';
import { FavoritePieceComponent } from './components/pieces/favorite/favorite-piece.component';
import { MailPieceComponent } from './components/pieces/mail/mail-piece.component';
import { PhonePieceComponent } from './components/pieces/phone/phone-piece.component';
import { coreStateKey } from './constants/core.constants';
import { HtmlDirective } from './directives/html.directive';
import { LabelDirective } from './directives/label.directive';
import { MediaDirective } from './directives/media.directive';
import { AddressPipe } from './pipes/address.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { StripTagsPipe } from './pipes/strip-tags.pipe';
import { TranslatablePipe } from './pipes/translatable.pipe';
import { TruncateWordsPipe } from './pipes/truncate-words.pipe';
import { CoreEffects } from './state/core.effects';
import { coreReducer } from './state/core.reducer';

const components = [
  AddressPieceComponent,
  CategoryPieceComponent,
  DatePieceComponent,
  FavoritePieceComponent,
  FeedbackComponent,
  LogoComponent,
  MailPieceComponent,
  PhonePieceComponent,
];

const directives = [
  LabelDirective,
  HtmlDirective,
  MediaDirective,
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
  MatButtonModule,
  MatSnackBarModule,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(coreStateKey, coreReducer),
  EffectsModule.forFeature([CoreEffects]),
  NgOptimizedImage,
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
