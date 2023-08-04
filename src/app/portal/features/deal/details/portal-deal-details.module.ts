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
import { CardModule } from 'src/app/shared/card/card.module';
import { CommentModule } from 'src/app/shared/comment/comment.module';
import { RadioButtonFormModule } from 'src/app/shared/form/radio-button/radio-button-form.module';
import { AvatarComponent } from 'src/app/shared/image/avatar/avatar.component';
import { MapModule } from 'src/app/shared/map/map.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { PriceComponent } from 'src/app/shared/price/price.component';
import { RatingModule } from 'src/app/shared/rating/rating.module';
import { ShareModule } from 'src/app/shared/share/share.module';
import { TableModule } from 'src/app/shared/table/table.module';
import { TitleModule } from 'src/app/shared/title/title.module';
import { PortalDealDetailsCreatorComponent } from './components/creator/portal-deal-details-creator.component';
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
  AvatarComponent,
  CoreModule,
  CommentModule,
  CardModule,
  MediaModule,
  RadioButtonFormModule,
  PortalDealDetailsRoutingModule,
  PriceComponent,
  RatingModule,
  ShareModule,
  TableModule,
  TitleModule
];

const libs = [
  FontAwesomeModule,
  StoreModule.forFeature(portalDealDetailsStateKey, portalDealDetailsReducer),
  EffectsModule.forFeature([PortalDealDetailsEffects]),
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
