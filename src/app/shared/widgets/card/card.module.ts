
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AddressPieceComponent } from 'ngx-cinlib/address';
import { DatePieceComponent } from 'ngx-cinlib/date/piece';
import { IconComponent } from 'ngx-cinlib/icons';
import { CategoryPieceComponent } from 'ngx-cinlib/layouts/category';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { PhonePieceComponent } from 'ngx-cinlib/layouts/phone';
import { MediaAttributionDirective } from 'ngx-cinlib/media/common';
import { MediaElementComponent } from 'ngx-cinlib/media/elements';
import { ShareButtonComponent } from 'ngx-cinlib/share';
import { CoreModule } from 'src/app/core/core.module';
import { FavoriteComponent } from '../favorite/favorite.component';
import { CardActionsComponent } from './components/actions/card-actions.component';
import { ContactCardComponent } from './components/contact/contact-card.component';
import { ContentCardComponent } from './components/content/content-card.component';
import { FlipCardComponent } from './components/flip/flip-card.component';
import { MemberCardComponent } from './components/member/member-card.component';
import { SponsoredDesktopCardComponent } from './components/sponsored/desktop/sponsored-desktop-card.component';
import { SponsoredCardComponent } from './components/sponsored/sponsored-card.component';

const components = [
  CardActionsComponent,
  ContactCardComponent,
  ContentCardComponent,
  SponsoredCardComponent,
  SponsoredDesktopCardComponent,
  MemberCardComponent,
  FlipCardComponent
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatMenuModule,
  MatButtonToggleModule
];

const modules = [
  CoreModule,
  FavoriteComponent,
];

const libs = [
  AddressPieceComponent,
  CategoryPieceComponent,
  IconComponent,
  DatePieceComponent,
  MailPieceComponent,
  MediaAttributionDirective,
  MediaElementComponent,
  PhonePieceComponent,
  ShareButtonComponent,
];

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
export class CardModule { }
