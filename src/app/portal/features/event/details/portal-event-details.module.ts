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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CalendarModule } from 'src/app/shared/calendar/calendar.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { CommentModule } from 'src/app/shared/comment/comment.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { AvatarComponent } from 'src/app/shared/image/avatar/avatar.component';
import { MapModule } from 'src/app/shared/map/map.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { PriceComponent } from 'src/app/shared/price/price.component';
import { RatingModule } from 'src/app/shared/rating/rating.module';
import { ShareModule } from 'src/app/shared/share/share.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalMapPageFeatureModule } from '../../map/page-feature/portal-map-page-feature.module';
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
  CalendarModule,
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
  PortalMapPageFeatureModule,
];

const modules = [
  AvatarComponent,
  CoreModule,
  CommentModule,
  CardModule,
  MediaModule,
  PortalEventDetailsRoutingModule,
  PriceComponent,
  RadioButtonFormModule,
  RatingModule,
  ShareModule,
  TableModule,
  TitleModule
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalEventDetailsStateKey, portalEventDetailsReducer),
  EffectsModule.forFeature([PortalEventDetailsEffects]),
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
