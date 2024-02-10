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
import { DatePieceComponent } from 'ngx-cinlib/date/piece';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { PhonePieceComponent } from 'ngx-cinlib/layouts/phone';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaGalleryComponent, MediaSliderComponent, MediaTitleComponent } from 'ngx-cinlib/media/elements';
import { ShareButtonComponent } from 'ngx-cinlib/share';
import { CoreModule } from 'src/app/core/core.module';
import { CommentModule } from 'src/app/shared/form/comment/comment.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { RatingModule } from 'src/app/shared/widgets/rating/rating.module';
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
  CoreModule,
  CommentModule,
  CardModule,
  FavoriteComponent,
  MapModule,
  PortalSurveyDetailsRoutingModule,
  RatingModule,
  TableModule,
];

const libs = [
  StoreModule.forFeature(portalSurveyDetailsStateKey, portalSurveyDetailsReducer),
  EffectsModule.forFeature([PortalSurveyDetailsEffects]),

  DatePieceComponent,
  DetailsTitleComponent,
  MailPieceComponent,
  MediaGalleryComponent,
  MediaSliderComponent,
  MediaTitleComponent,
  PhonePieceComponent,
  ShareButtonComponent,
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
