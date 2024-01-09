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
import { CoreModule } from 'src/app/core/core.module';
import { ConfirmChangeComponent } from 'src/app/shared/dialogs/confirm-change/confirm-change.component';
import { CkEditorFormComponent } from 'src/app/shared/form/ck-editor/ck-editor-form.component';
import { CommentModule } from 'src/app/shared/form/comment/comment.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { FormStepperModule } from 'src/app/shared/form/stepper/form-stepper.module';
import { DatePieceComponent } from 'src/app/shared/layout/date/date-piece.component';
import { GridLayoutModule } from 'src/app/shared/layout/grid-layout/grid-layout.module';
import { MailPieceComponent } from 'src/app/shared/layout/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { WebsitePieceComponent } from 'src/app/shared/layout/website/website-piece.component';
import { MediaFormModule } from 'src/app/shared/media/modules/form/media-form.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { RatingModule } from 'src/app/shared/widgets/rating/rating.module';
import { ShareModule } from 'src/app/shared/widgets/share/share.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ContestPortalDetailsCommentComponent } from './components/comment/portal-contest-details-comment.component';
import { ContestPortalDetailsLandingComponent } from './components/contest-portal-details-landing.component';
import { ContestPortalDetailsSummaryComponent } from './components/summary/contest-portal-details-summary.component';
import { contestPortalDetailsLandingStateKey } from './constants/contest-details-landing.constant';
import { ContestPortalDetailsLandingRoutingModule } from './contest-portal-details-landing-routing.module';
import { ContestPortalDetailsLandingEffects } from './state/portal-contest-details-landing.effects';
import { portalContestDetailsReducer } from './state/portal-contest-details-landing.reducer';

const components = [
  ContestPortalDetailsLandingComponent,
  ContestPortalDetailsCommentComponent,
  ContestPortalDetailsSummaryComponent
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
  MatMenuModule,
  MatSlideToggleModule,
];

const modules = [
  CalendarModule,
  CardModule,
  CkEditorFormComponent,
  CoreModule,
  CommentModule,
  ContestPortalDetailsLandingRoutingModule,
  DatePieceComponent,
  WebsitePieceComponent,
  FavoriteComponent,
  MailPieceComponent,
  MapModule,
  MediaFormModule,
  MediaWidgetsModule,
  PhonePieceComponent,
  RadioButtonFormModule,
  RatingModule,
  ShareModule,
  TableModule,
  TitleModule,
  FormStepperModule,
  GridLayoutModule,
  ConfirmChangeComponent
];

const libs = [
  StoreModule.forFeature(contestPortalDetailsLandingStateKey, portalContestDetailsReducer),
  EffectsModule.forFeature([ContestPortalDetailsLandingEffects]),]

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
