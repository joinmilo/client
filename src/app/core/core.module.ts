/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import { ContactCardComponent } from './components/cards/contact-card/contact-card.component';
import { ContentCardComponent } from './components/cards/content-card/content-card.component';
import { SponsoredCardComponent } from './components/cards/sponsored-card/sponsored-card.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ImageComponent } from './components/image/image.component';
import { LogoComponent } from './components/logo/logo.component';
import { AddressPieceComponent } from './components/pieces/adress/address-piece.component';
import { DatePieceComponent } from './components/pieces/date/date-piece.component';
import { FavoritePieceComponent } from './components/pieces/favorite/favorite-piece.component';
import { SliderComponent } from './components/slider/slider.component';
import { coreFeatureKey } from './constants/core.constants';
import { HtmlDirective } from './directives/html.directive';
import { I18nDirective } from './directives/i18n.directive';
import { AddressPipe } from './pipes/address.pipe';
import { TranslatablePipe } from './pipes/translatable.pipe';
import { CoreEffects } from './state/core.effects';
import { coreReducer } from './state/core.reducer';

const components: Type<any>[] = [
  AddressPieceComponent,
  ContentCardComponent,
  CardSliderComponent,
  ContactCardComponent,
  DatePieceComponent,
  FavoritePieceComponent,
  FeedbackComponent,
  ImageComponent,
  LogoComponent,
  SliderComponent,
  SponsoredCardComponent,
];

const directives: Type<any>[] = [
  HtmlDirective,
  I18nDirective
];

const pipes: Type<any>[] = [
  AddressPipe,
  TranslatablePipe,
];

const framework: Type<any>[] = [
  CommonModule,
  RouterModule,
];

const materials: Type<any>[] = [
  FontAwesomeModule,
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule,
  MatChipsModule,
];

const libs: any = [
  StoreModule.forFeature(coreFeatureKey, coreReducer),
  EffectsModule.forFeature([CoreEffects]),
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
    ...libs,
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
    iconLibrary.addIconPacks(fab, fas, far);
  }
}
