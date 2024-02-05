
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { DatePieceComponent } from 'ngx-cinlib/date/piece';
import { IconComponent } from 'ngx-cinlib/icons';
import { MailPieceComponent } from 'ngx-cinlib/layouts/mail';
import { CoreModule } from 'src/app/core/core.module';
import { AddressPieceComponent } from '../../layout/address/address-piece.component';
import { CategoryPieceComponent } from '../../layout/category/category-piece.component';
import { PhonePieceComponent } from '../../layout/phone/phone-piece.component';
import { TitleModule } from '../../layout/title/title.module';
import { MediaWidgetsModule } from '../../media/modules/widgets/media-widgets.module';
import { ChartModule } from '../chart/chart.module';
import { FavoriteComponent } from '../favorite/favorite.component';
import { ShareModule } from '../share/share.module';
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
  ShareModule,
  MatButtonToggleModule
];

const modules = [
  AddressPieceComponent,
  CategoryPieceComponent,
  CoreModule,
  FavoriteComponent,
  MediaWidgetsModule,
  PhonePieceComponent,
  TitleModule,
  ChartModule
];

const libs = [
  IconComponent,
  DatePieceComponent,
  MailPieceComponent,
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
