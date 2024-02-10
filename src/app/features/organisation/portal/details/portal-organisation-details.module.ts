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
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { PhonePieceComponent } from 'ngx-cinlib/layouts/phone';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { WebsitePieceComponent } from 'ngx-cinlib/layouts/website';
import { MediaGalleryComponent, MediaSliderComponent, MediaTitleComponent } from 'ngx-cinlib/media/elements';
import { ShareButtonComponent } from 'ngx-cinlib/share';
import { CoreModule } from 'src/app/core/core.module';
import { CommentModule } from 'src/app/shared/form/comment/comment.module';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { RatingModule } from 'src/app/shared/widgets/rating/rating.module';
import { CardSliderComponent } from 'src/app/shared/widgets/sliders/card-slider/card-slider.component';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { PortalOrganisationDetailsCommentComponent } from './components/comment/portal-organisation-details-comments.component';
import { PortalOrganisationDetailsCommentsComponent } from './components/comments/portal-organisation-details-comments.component';
import { PortalOrganisationDetailsMediaComponent } from './components/media/portal-organisation-details-media.component';
import { PortalOrganisationDetailsMembersComponent } from './components/members/portal-organisation-details-members.component';
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
  PortalOrganisationDetailsMembersComponent,
  PortalOrganisationDetailsMediaComponent
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
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
  CardSliderComponent,
  CoreModule,
  CommentModule,
  CardModule,
  FavoriteComponent,
  MapModule,
  PortalOrganisationDetailsRoutingModule,
  RatingModule,
  TableModule,
  WebsitePieceComponent,
];

const libs = [
  StoreModule.forFeature(portalOrganisationDetailsStateKey, portalOrganisationDetailsReducer),
  EffectsModule.forFeature([PortalOrganisationDetailsEffects]),

  AddressPieceComponent,
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
export class PortalOrganisationDetailsModule { }
