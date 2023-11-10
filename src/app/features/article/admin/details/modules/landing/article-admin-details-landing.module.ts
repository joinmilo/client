import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { MailPieceComponent } from 'src/app/shared/layout/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ArticleAdminDetailsLandingComponent } from './components/article-admin-details-landing.component';
import { articleAdminDetailsLandingStateKey } from './constants/article-admin-details-landing.constants';
import { ArticleAdminDetailsLandingEffects } from './state/article-admin-details-landing.effects';
import { articleAdminDetailsLandingReducer } from './state/article-admin-details-landing.reducer';

const components = [
  ArticleAdminDetailsLandingComponent,
]

const framework = [
  CommonModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
];

const modules = [
  AddressPieceComponent,
  CalendarModule,
  CoreModule,
  MailPieceComponent,
  MediaWidgetsModule,
  PhonePieceComponent,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(articleAdminDetailsLandingStateKey, articleAdminDetailsLandingReducer),
  EffectsModule.forFeature([ArticleAdminDetailsLandingEffects]),
  FontAwesomeModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    ...framework,
    ...libs,
    ...materials,
    ...modules,
  ],
  exports: [...components],
})
export class ArticleAdminDetailsLandingModule { }
