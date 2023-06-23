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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { CommentModule } from 'src/app/shared/comment/comment.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { AvatarComponent } from 'src/app/shared/image/avatar/avatar.component';
import { TitleImageComponent } from 'src/app/shared/image/title/title-image.component';
import { RatingModule } from 'src/app/shared/rating/rating.module';
import { MediaSliderComponent } from 'src/app/shared/sliders/media-slider/media-slider.component';
import { SocialShareModule } from 'src/app/shared/social-share/social-share.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalEventCommentsComponent } from './components/comments/portal-event-comments.component';
import { InviteFriendsDialogComponent } from './components/invite-friends-dialog/invite-friends-dialog.component';
import { EventDetailsOrganisationComponent } from './components/organisation/event-details-organisation.component';
import { EventParticipantsComponent } from './components/participants/event-participants.component';
import { PortalEventDetailsComponent } from './components/portal-event-details.component';
import { ShowAllFriendsDialogComponent } from './components/show-all-friends-dialog/show-all-friends-dialog.component';
import { EventDetailsSummrayComponent } from './components/summary/event-details-summary.component';
import { portalEventDetailsStateKey } from './constants/event-details.constant';
import { PortalEventDetailsRoutingModule } from './portal-event-details-routing.module';
import { PortalEventDetailsEffects } from './state/portal-event-details.effects';
import { portalEventDetailsReducer } from './state/portal-event-details.reducer';

const components = [
  PortalEventDetailsComponent,
  PortalEventCommentsComponent,
  EventDetailsSummrayComponent,
  EventParticipantsComponent,
  ShowAllFriendsDialogComponent,
  EventDetailsOrganisationComponent,
  InviteFriendsDialogComponent,
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatDialogModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
];

const modules = [
  AvatarComponent,
  CoreModule,
  CommentModule,
  CardModule,
  MediaSliderComponent,
  PortalEventDetailsRoutingModule,
  RadioButtonFormModule,
  RatingModule,
  SocialShareModule,
  TableModule,
  TitleModule,
  TitleImageComponent,
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
