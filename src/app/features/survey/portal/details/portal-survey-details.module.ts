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
import { CoreModule } from 'src/app/core/core.module';
import { CommentModule } from 'src/app/shared/form/comment/comment.module';
import { DatePieceComponent } from 'src/app/shared/layout/date/date-piece.component';
import { MailPieceComponent } from 'src/app/shared/layout/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { RatingModule } from 'src/app/shared/widgets/rating/rating.module';
import { ShareModule } from 'src/app/shared/widgets/share/share.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { PortalSurveyDetailsMediaComponent } from './components/media/portal-survey-details-media.component';
import { PortalSurveyDetailsComponent } from './components/portal-survey-details.component';
import { PortalSurveyDetailsSummaryComponent } from './components/summary/portal-survey-details-summary.component';
import { portalSurveyDetailsStateKey } from './constants/survey-details.constant';
import { PortalSurveyDetailsRoutingModule } from './portal-survey-details-routing.module';
import { PortalSurveyDetailsEffects } from './state/portal-survey-details.effects';
import { portalSurveyDetailsReducer } from './state/portal-survey-details.reducer';

const components = [
  PortalSurveyDetailsComponent,
  PortalSurveyDetailsSummaryComponent,
  PortalSurveyDetailsMediaComponent

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
  MatMenuModule
];

const modules = [
  CalendarModule,
  CoreModule,
  CommentModule,
  CardModule,
  DatePieceComponent,
  FavoriteComponent,
  MailPieceComponent,
  MapModule,
  MediaWidgetsModule,
  PhonePieceComponent,
  PortalSurveyDetailsRoutingModule,
  RatingModule,
  ShareModule,
  TableModule,
  TitleModule
];

const libs = [
  StoreModule.forFeature(portalSurveyDetailsStateKey, portalSurveyDetailsReducer),
  EffectsModule.forFeature([PortalSurveyDetailsEffects]),
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
export class PortalSurveyDetailsModule { }
