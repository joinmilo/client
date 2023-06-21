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
import { FormModule } from 'src/app/shared/form/form.module';
import { SocialShareModule } from 'src/app/shared/social-share/social-share.module';
import { RatingModule } from 'src/app/shared/star-rating/rating.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalEventCommentsComponent } from './components/comments/portal-event-comments.component';
import { PortalEventDetailsComponent } from './components/details/portal-event-details.component';
import { EventCardDetailComponent } from './components/event-card-detail/event-card-detail.component';
import { EventMediaComponent } from './components/event-media/event-media.component';
import { EventOrganisationComponent } from './components/event-organisation/event-organisation.component';
import { EventParticipantsComponent } from './components/event-participants/event-participants.component';
import { InviteFriendsDialogComponent } from './components/invite-friends-dialog/invite-friends-dialog.component';
import { ShowAllFriendsDialogComponent } from './components/show-all-friends-dialog/show-all-friends-dialog.component';
import { portalEventDetailsStateKey } from './constants/event-details.constant';
import { PortalEventDetailsRoutingModule } from './portal-event-details-routing.module';
import { PortalEventDetailsEffects } from './state/portal-event-details.effects';
import { portalEventDetailsReducer } from './state/portal-event-details.reducer';

const components = [
  PortalEventDetailsComponent,
  PortalEventCommentsComponent,
  EventCardDetailComponent,
  EventParticipantsComponent,
  ShowAllFriendsDialogComponent,
  EventOrganisationComponent,
  InviteFriendsDialogComponent,
  EventMediaComponent,

];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
  MatDialogModule,
  MatCheckboxModule,
  MatFormFieldModule,
  FormsModule,
  MatInputModule,
  ReactiveFormsModule,
];

const modules = [
  CoreModule,
  CommentModule,
  CardModule,
  PortalEventDetailsRoutingModule,
  FormModule,
  TableModule,
  TitleModule,
  SocialShareModule,
  RatingModule
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
