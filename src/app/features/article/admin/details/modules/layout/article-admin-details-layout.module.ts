import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { RadioCardFormModule } from 'src/app/shared/form/radio-card/radio-card-form.module';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { MailPieceComponent } from 'src/app/shared/layout/mail/mail-piece.component';
import { PhonePieceComponent } from 'src/app/shared/layout/phone/phone-piece.component';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaModule } from 'src/app/shared/media/media.module';
import { CalendarModule } from 'src/app/shared/widgets/calendar/calendar.module';
import { TableModule } from 'src/app/shared/widgets/table/table.module';
import { ArticleAdminDetailsLayoutComponent } from './components/article-admin-details-layout.component';
import { articleAdminDetailsLayoutStateKey } from './constants/article-admin-details-layout.constants';
import { ArticleAdminDetailsLayoutEffects } from './state/article-admin-details-layout.effects';
import { articleAdminDetailsLayoutReducer } from './state/article-event-admin-details-layout.reducer';


const components = [
  ArticleAdminDetailsLayoutComponent,
]

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  FontAwesomeModule,
  MediaModule,
  MatGridListModule,
];

const modules = [
  AddressPieceComponent,
  CalendarModule,
  CoreModule,
  MailPieceComponent,
  PhonePieceComponent,
  RadioCardFormModule,
  TableModule,
  TitleModule,
];

const libs = [
  StoreModule.forFeature(articleAdminDetailsLayoutStateKey, articleAdminDetailsLayoutReducer),
  EffectsModule.forFeature([ArticleAdminDetailsLayoutEffects]),
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
export class ArticleAdminDetailsLayoutModule { }
