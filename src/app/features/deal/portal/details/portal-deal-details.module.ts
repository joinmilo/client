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
import { TranslatablePipe } from 'ngx-cinlib/i18n';
import { CategoryPieceComponent } from 'ngx-cinlib/layouts/category';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { PhonePieceComponent } from 'ngx-cinlib/layouts/phone';
import { DetailsTitleComponent } from 'ngx-cinlib/layouts/title';
import { MediaGalleryComponent, MediaSliderComponent, MediaTitleComponent } from 'ngx-cinlib/media/elements';
import { ShareButtonComponent } from 'ngx-cinlib/share';
import { CoreModule } from 'src/app/core/core.module';
import { CommentModule } from 'src/app/shared/form/comment/comment.module';
import { PriceComponent } from 'src/app/shared/layout/price/price.component';
import { CardModule } from 'src/app/shared/widgets/card/card.module';
import { FavoriteComponent } from 'src/app/shared/widgets/favorite/favorite.component';
import { MapModule } from 'src/app/shared/widgets/map/map.module';
import { RatingModule } from 'src/app/shared/widgets/rating/rating.module';
import { PortalDealDetailsCreatorComponent } from './components/creator/portal-deal-details-creator.component';
import { PortalDealDetailsMediaComponent } from './components/media/portal-deal-details-media.component';
import { PortalDealDetailsComponent } from './components/portal-deal-details.component';
import { PortalDealDetailsSummaryComponent } from './components/summary/portal-deal-details-summary.component';
import { portalDealDetailsStateKey } from './constants/deal-details.constant';
import { PortalDealDetailsRoutingModule } from './portal-deal-details-routing.module';
import { PortalDealDetailsEffects } from './state/portal-deal-details.effects';
import { portalDealDetailsReducer } from './state/portal-deal-details.reducer';


const components = [
  PortalDealDetailsComponent,
  PortalDealDetailsCreatorComponent,
  PortalDealDetailsSummaryComponent,
  PortalDealDetailsMediaComponent
];

const framework = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
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
  CardModule,
  CoreModule,
  CommentModule,
  FavoriteComponent,
  PortalDealDetailsRoutingModule,
  PriceComponent,
  RatingModule,
];

const libs = [
  StoreModule.forFeature(portalDealDetailsStateKey, portalDealDetailsReducer),
  EffectsModule.forFeature([PortalDealDetailsEffects]),

  AddressPieceComponent,
  CategoryPieceComponent,
  DetailsTitleComponent,
  MailPieceComponent,
  MediaGalleryComponent,
  MediaSliderComponent,
  MediaTitleComponent,
  PhonePieceComponent,
  ShareButtonComponent,
  TranslatablePipe,
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
export class PortalDealDetailsModule { }
