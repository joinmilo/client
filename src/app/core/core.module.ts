import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CalendarHeaderComponent } from './components/calendar/calendar-header/calendar-header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import { ContactCardComponent } from './components/cards/contact-card/contact-card.component';
import { ContentCardComponent } from './components/cards/content-card/content-card.component';
import { SponsoredCardComponent } from './components/cards/sponsored-card/sponsored-card.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { RadioButtonGroupComponent } from './components/forms/radio-button-group/radio-button-group.component';
import { RadioButtonComponent } from './components/forms/radio-button/radio-button.component';
import { ImageComponent } from './components/image/image.component';
import { LogoComponent } from './components/logo/logo.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { AddressPieceComponent } from './components/pieces/adress/address-piece.component';
import { DatePieceComponent } from './components/pieces/date/date-piece.component';
import { FavoritePieceComponent } from './components/pieces/favorite/favorite-piece.component';
import { SliderComponent } from './components/slider/slider.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { coreFeatureKey } from './constants/core.constants';
import { HtmlDirective } from './directives/html.directive';
import { AppLabelDirective } from './directives/label.directive';
import { AddressPipe } from './pipes/address.pipe';
import { TranslatablePipe } from './pipes/translatable.pipe';
import { CoreEffects } from './state/core.effects';
import { coreReducer } from './state/core.reducer';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommentCardComponent } from './components/cards/comment-card/comment-card.component';

const components = [
  AddressPieceComponent,
  ContentCardComponent,
  CalendarComponent,
  CalendarHeaderComponent,
  CardSliderComponent,
  ContactCardComponent,
  DatePieceComponent,
  FavoritePieceComponent,
  FeedbackComponent,
  ImageComponent,
  LogoComponent,
  PageTitleComponent,
  RadioButtonComponent,
  RadioButtonGroupComponent,
  SliderComponent,
  SponsoredCardComponent,
  SubTitleComponent,
  StarRatingComponent,
  ProgressBarComponent,
  CommentCardComponent
];

const directives = [
  AppLabelDirective,
  HtmlDirective,
];

const pipes = [
  AddressPipe,
  TranslatablePipe,
];

const framework = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule
];

const materials = [
  FontAwesomeModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatSelectModule,
  MatRadioModule,
  MatTooltipModule,
  MatProgressBarModule,
];

const libs = [
  StoreModule.forFeature(coreFeatureKey, coreReducer),
  EffectsModule.forFeature([CoreEffects]),
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
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
