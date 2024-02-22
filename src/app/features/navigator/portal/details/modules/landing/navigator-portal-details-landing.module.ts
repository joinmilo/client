import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DatePieceComponent } from 'ngx-cinlib/date/piece';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { PhonePieceComponent } from 'ngx-cinlib/layouts/phone';
import { WebsitePieceComponent } from 'ngx-cinlib/layouts/website';
import { MediaGalleryComponent, MediaSliderComponent, MediaTitleComponent } from 'ngx-cinlib/media/elements';
import { ShareButtonComponent } from 'ngx-cinlib/share';
import { CoreModule } from 'src/app/core/core.module';
import { CommentModule } from 'src/app/shared/form/comment/comment.module';
import { navigatorPortalDetailsLandingStateKey } from './constants/navigator-details-landing.constant';

import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { RatingModule } from 'src/app/shared/widgets/rating/rating.module';
import { NavigatorPortalDetailsLandingComponent } from './components/navigator-portal-details-landing.component';
import { NavigatorPortalDetailsLandingRoutingModule } from './navigator-portal-details-landing-routing.module';
import { NavigatorPortalDetailsLandingEffects } from './state/navigator-portal-details-landing.effects';
import { navigatorPortalDetailsReducer } from './state/navigator-portal-details-landing.reducer';

const components = [
  NavigatorPortalDetailsLandingComponent,

];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
];

const modules = [
  CardModule,
  CommentModule,
  NavigatorPortalDetailsLandingRoutingModule,
  CoreModule,
  FavoriteComponent,
  MapModule,
  RatingModule,
];

const libs = [
  StoreModule.forFeature(navigatorPortalDetailsLandingStateKey, navigatorPortalDetailsReducer),
  EffectsModule.forFeature([NavigatorPortalDetailsLandingEffects]),

  DatePieceComponent,
  I18nDirective,
  MailPieceComponent,
  MediaGalleryComponent,
  MediaSliderComponent,
  MediaTitleComponent,
  PhonePieceComponent,
  ShareButtonComponent,
  TranslatablePipe,
  WebsitePieceComponent,
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
export class NavigatorPortalDetailsLandingModule { }
