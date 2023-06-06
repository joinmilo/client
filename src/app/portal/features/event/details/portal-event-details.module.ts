import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { CommentModule } from 'src/app/shared/comment/comment.module';
import { UserCommentModule } from 'src/app/shared/comments/user-comment.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { SocialShareModule } from 'src/app/shared/share-button/social-share.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalEventCommentsComponent } from './components/comments/portal-event-comments.component';
import { PortalEventDetailsComponent } from './components/details/portal-event-details.component';
import { EventCardDetailComponent } from './components/event-card-detail/event-card-detail.component';
import { EventDescriptionComponent } from './components/event-description/event-description.component';
import { EventEvaluationComponent } from './components/event-evaluation/event-evaluation.component';
import { EventParticipantsComponent } from './components/event-participants/event-participants.component';
import { portalEventDetailsStateKey } from './constants/event-details.constant';
import { PortalEventDetailsRoutingModule } from './portal-event-details-routing.module';
import { PortalEventDetailsEffects } from './state/portal-event-details.effects';
import { portalEventDetailsReducer } from './state/portal-event-details.reducer';

const components = [
  PortalEventDetailsComponent,
  PortalEventCommentsComponent,
  EventCardDetailComponent,
  EventDescriptionComponent,
  EventParticipantsComponent,
  EventEvaluationComponent

];

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatDividerModule,
  MatCardModule,
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
  UserCommentModule,
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
