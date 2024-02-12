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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddressPieceComponent } from 'ngx-cinlib/address';
import { CalendarComponent } from 'ngx-cinlib/calendar';
import { LocalDatePipe } from 'ngx-cinlib/date/pipes';
import { I18nDirective, TranslatablePipe } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { CategoryPieceComponent } from 'ngx-cinlib/layouts/category';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { PhonePieceComponent } from 'ngx-cinlib/layouts/phone';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaAvatarComponent, MediaGalleryComponent, MediaSliderComponent, MediaTitleComponent } from 'ngx-cinlib/media/elements';
import { ShareButtonComponent } from 'ngx-cinlib/share';
import { CoreModule } from 'src/app/core/core.module';
import { CommentModule } from 'src/app/shared/form/comment/comment.module';
import { PriceComponent } from 'src/app/shared/layout/price/price.component';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { RatingModule } from 'src/app/shared/widgets/rating/rating.module';
import { PortalEventDetailsAttendeeComponent } from './components/attendee/portal-event-details-attendee.component';
import { PortalEventDetailsCalendarComponent } from './components/calendar/portal-event-details-calendar.component';
import { PortalEventDetailsCommentComponent } from './components/comment/portal-event-details-comment.component';
import { PortalEventDetailsCommentsComponent } from './components/comments/portal-event-details-comments.component';
import { PortalEventDetailsFriendsInviteComponent } from './components/friends-invite/portal-event-details-friends-invite.component';
import { PortalEventDetailsFriendsShowComponent } from './components/friends-show/portal-event-details-friends-show.component';
import { PortalEventDetailsMediaComponent } from './components/media/portal-event-details-media.component';
import { PortalEventDetailsOrganisationComponent } from './components/organisation/portal-event-details-organisation.component';
import { PortalEventDetailsParticipantsComponent } from './components/participants/portal-event-details-participants.component';
import { PortalEventDetailsComponent } from './components/portal-event-details.component';
import { PortalEventDetailsRatingComponent } from './components/rating/portal-event-details-rating.component';
import { PortalEventDetailsSummaryComponent } from './components/summary/portal-event-details-summary.component';
import { portalEventDetailsStateKey } from './constants/event-details.constant';
import { PortalEventDetailsRoutingModule } from './portal-event-details-routing.module';
import { PortalEventDetailsEffects } from './state/portal-event-details.effects';
import { portalEventDetailsReducer } from './state/portal-event-details.reducer';

const components = [
  PortalEventDetailsComponent,
  PortalEventDetailsAttendeeComponent,
  PortalEventDetailsCalendarComponent,
  PortalEventDetailsCommentComponent,
  PortalEventDetailsCommentsComponent,
  PortalEventDetailsFriendsInviteComponent,
  PortalEventDetailsOrganisationComponent,
  PortalEventDetailsParticipantsComponent,
  PortalEventDetailsRatingComponent,
  PortalEventDetailsSummaryComponent,
  PortalEventDetailsFriendsShowComponent,
  PortalEventDetailsMediaComponent
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MapModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatDialogModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
];

const modules = [
  CoreModule,
  CommentModule,
  CardModule,
  FavoriteComponent,
  PortalEventDetailsRoutingModule,
  PriceComponent,
  RatingModule,
];

const libs = [
  StoreModule.forFeature(portalEventDetailsStateKey, portalEventDetailsReducer),
  EffectsModule.forFeature([PortalEventDetailsEffects]),

  AddressPieceComponent,
  CalendarComponent,
  CategoryPieceComponent,
  DetailsTitleComponent,
  IconComponent,
  I18nDirective,
  LocalDatePipe,
  MailPieceComponent,
  MediaAvatarComponent,
  MediaGalleryComponent,
  MediaSliderComponent,
  MediaTitleComponent,
  PhonePieceComponent,
  ShareButtonComponent,
  TranslatablePipe,
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
export class PortalEventDetailsModule { }
