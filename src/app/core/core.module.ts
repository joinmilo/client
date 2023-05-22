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
import { AvatarComponent } from './components/avatar/avatar.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LogoComponent } from './components/logo/logo.component';
import { AddressPieceComponent } from './components/pieces/adress/address-piece.component';
import { CategoryPieceComponent } from './components/pieces/category/category-piece.component';
import { DatePieceComponent } from './components/pieces/date/date-piece.component';
import { FavoritePieceComponent } from './components/pieces/favorite/favorite-piece.component';
import { SharePieceComponent } from './components/pieces/share/share-piece.component';
import { SliderComponent } from './components/slider/slider.component';
import { coreStateKey } from './constants/core.constants';
import { HtmlDirective } from './directives/html.directive';
import { LabelDirective } from './directives/label.directive';
import { MediaDirective } from './directives/media.directive';
import { AddressPipe } from './pipes/address.pipe';
import { TranslatablePipe } from './pipes/translatable.pipe';
import { CoreEffects } from './state/core.effects';
import { coreReducer } from './state/core.reducer';

const components = [
  AddressPieceComponent,
  AvatarComponent,
  CategoryPieceComponent,
  DatePieceComponent,
  FavoritePieceComponent,
  FeedbackComponent,
  LogoComponent,
  SharePieceComponent,
  SliderComponent,
  SliderComponent,
];

const directives = [
  LabelDirective,
  HtmlDirective,
  MediaDirective,
];

const pipes = [
  AddressPipe,
  TranslatablePipe,
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
