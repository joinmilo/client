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
import { FileModule } from 'src/app/shared/file/file.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { AvatarComponent } from 'src/app/shared/image/avatar/avatar.component';
import { TitleImageComponent } from 'src/app/shared/image/title/title-image.component';
import { MapModule } from 'src/app/shared/map/map.module';
import { RatingModule } from 'src/app/shared/rating/rating.module';
import { ShareModule } from 'src/app/shared/share/share.module';
import { CardSliderComponent } from 'src/app/shared/sliders/card-slider/card-slider.component';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalOrganisationDetailsCommentComponent } from './components/comment/portal-organisation-details-comments.component';
import { PortalOrganisationDetailsCommentsComponent } from './components/comments/portal-organisation-details-comments.component';
import { PortalOrganisationDetailsComponent } from './components/portal-organisation-details.component';
import { PortalOrganisationDetailsRatingComponent } from './components/rating/portal-organisation-details-rating.component';
import { PortalOrganisationDetailsSummaryComponent } from './components/summary/portal-organisation-details-summary.component';
import { portalOrganisationDetailsStateKey } from './constants/organisation-details.constant';
import { PortalOrganisationDetailsRoutingModule } from './portal-organisation-details-routing.module';
import { PortalOrganisationDetailsEffects } from './state/portal-organisation-details.effects';
import { portalOrganisationDetailsReducer } from './state/portal-organisation-details.reducer';


const components = [
  PortalOrganisationDetailsComponent,
  PortalOrganisationDetailsCommentComponent,
  PortalOrganisationDetailsCommentsComponent,
  PortalOrganisationDetailsSummaryComponent,
  PortalOrganisationDetailsRatingComponent,

];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CalendarModule,
  MapModule,
];

const materials = [
  RatingModule,
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
  FileModule,
  PortalOrganisationDetailsRoutingModule,
  RadioButtonFormModule,
  RatingModule,
  ShareModule,
  TableModule,
  CardSliderComponent,
  TitleModule,
  TitleImageComponent,
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalOrganisationDetailsStateKey, portalOrganisationDetailsReducer),
  EffectsModule.forFeature([PortalOrganisationDetailsEffects]),
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
export class PortalOrganisationDetailsModule { }
