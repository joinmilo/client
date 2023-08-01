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
import { TitleImageComponent } from 'src/app/shared/image/title/title-image.component';
import { MapModule } from 'src/app/shared/map/map.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { RatingModule } from 'src/app/shared/rating/rating.module';
import { ShareModule } from 'src/app/shared/share/share.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalContestDetailsCommentComponent } from './components/comment/portal-contest-details-comment.component';
import { PortalContestDetailsCommentsComponent } from './components/comments/portal-contest-details-comments.component';
import { PortalContestDetailsComponent } from './components/portal-contest-details.component';
import { PortalContestDetailsSummaryComponent } from './components/summary/portal-contest-details-summary.component';
import { portalContestDetailsStateKey } from './constants/contest-details.constant';
import { PortalContestDetailsRoutingModule } from './portal-contest-details-routing.module';
import { PortalContestDetailsEffects } from './state/portal-contest-details.effects';
import { portalContestDetailsReducer } from './state/portal-contest-details.reducer';

const components = [
  PortalContestDetailsComponent,
  PortalContestDetailsSummaryComponent,
  PortalContestDetailsCommentComponent,
  PortalContestDetailsCommentsComponent,

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
  MatMenuModule
];

const modules = [
  AvatarComponent,
  CoreModule,
  CommentModule,
  CardModule,
  MediaModule,
  PortalContestDetailsRoutingModule,
  RadioButtonFormModule,
  RatingModule,
  ShareModule,
  TableModule,
  TitleModule,
  TitleImageComponent,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalContestDetailsStateKey, portalContestDetailsReducer),
  EffectsModule.forFeature([PortalContestDetailsEffects]),
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
export class PortalContestDetailsModule { }
