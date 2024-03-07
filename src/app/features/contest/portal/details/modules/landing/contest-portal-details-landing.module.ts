import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { RatingModule } from 'src/app/shared/widgets/rating/rating.module';
import { ContestPortalDetailsCommentComponent } from './components/comment/portal-contest-details-comment.component';
import { ContestPortalDetailsLandingComponent } from './components/contest-portal-details-landing.component';
import { ContestPortalDetailsSummaryComponent } from './components/summary/contest-portal-details-summary.component';
import { contestPortalDetailsLandingStateKey } from './constants/contest-details-landing.constant';
import { ContestPortalDetailsLandingRoutingModule } from './contest-portal-details-landing-routing.module';
import { PortalContestDetailsMediaComponent } from './media/portal-contest-details-media.component';
import { ContestPortalDetailsLandingEffects } from './state/portal-contest-details-landing.effects';
import { portalContestDetailsReducer } from './state/portal-contest-details-landing.reducer';

const components = [
  ContestPortalDetailsLandingComponent,
  ContestPortalDetailsCommentComponent,
  ContestPortalDetailsSummaryComponent,
  PortalContestDetailsMediaComponent
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSlideToggleModule,
];

const modules = [
  CardModule,
  CommentModule,
  ContestPortalDetailsLandingRoutingModule,
  CoreModule,
  FavoriteComponent,
  MapModule,
  RatingModule,
];

const libs = [
  StoreModule.forFeature(contestPortalDetailsLandingStateKey, portalContestDetailsReducer),
  EffectsModule.forFeature([ContestPortalDetailsLandingEffects]),

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
export class ContestPortalDetailsLandingModule { }
