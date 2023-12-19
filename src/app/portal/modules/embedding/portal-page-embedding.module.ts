import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { ArticleEmbeddingModule } from 'src/app/features/article/embedding/article-embedding.module';
import { AuthorEmbeddingModule } from 'src/app/features/author/embedding/author-embedding.module';
import { CalendarEmbeddingModule } from 'src/app/features/calendar/embedding/calendar-embedding.module';
import { ContestEmbeddingModule } from 'src/app/features/contest/embedding/contest-embedding.module';
import { DealEmbeddingModule } from 'src/app/features/deal/embedding/deal-embedding.module';
import { EventEmbeddingModule } from 'src/app/features/event/embedding/event-embedding.module';
import { GuestArticleEmbeddingModule } from 'src/app/features/guest-article/embedding/guest-article-embedding.module';
import { MapEmbeddingModule } from 'src/app/features/map/embedding/map-embedding.module';
import { MediaEmbeddingModule } from 'src/app/features/media/embedding/media-embedding.module';
import { OrganisationEmbeddingModule } from 'src/app/features/organisation/embedding/organisation-embedding.module';
import { ReportEmbeddingModule } from 'src/app/features/report/embedding/report-embedding.module';
import { SurveyEmbeddingModule } from 'src/app/features/survey/embedding/survey-embedding.module';
import { TitleModule } from 'src/app/shared/layout/title/title.module';
import { MediaWidgetsModule } from 'src/app/shared/media/modules/widgets/media-widgets.module';
import { PortalPageEmbeddingBoxComponent } from './components/box/portal-page-embedding-box.component';
import { PortalPageEmbeddingExpansionComponent } from './components/expansion/portal-page-embedding-expansion.component';
import { PortalPagEmbeddingHeroComponent as PortalPageEmbeddingHeroComponent } from './components/hero/portal-page-embedding-hero.component';
import { PortalPageEmbeddingPluginComponent } from './components/plugin/portal-page-embedding-plugin.component';
import { PortalPageEmbeddingComponent } from './components/portal-page-embedding.component';
import { PortalPageEmbeddingTextMediaComponent } from './components/text-media/portal-page-embedding-text-media.component';

const components = [
  PortalPageEmbeddingComponent,
  PortalPageEmbeddingBoxComponent,
  PortalPageEmbeddingExpansionComponent,
  PortalPageEmbeddingHeroComponent,
  PortalPageEmbeddingPluginComponent,
  PortalPageEmbeddingTextMediaComponent,
];

const framework = [
  CommonModule,
  RouterModule,
];

const materials = [
  MatButtonModule,
  MatExpansionModule,
]

const modules = [
  ArticleEmbeddingModule,
  AuthorEmbeddingModule,
  CalendarEmbeddingModule,
  ContestEmbeddingModule,
  CoreModule,
  DealEmbeddingModule,
  EventEmbeddingModule,
  GuestArticleEmbeddingModule,
  MapEmbeddingModule,
  MediaEmbeddingModule,
  MediaWidgetsModule,
  OrganisationEmbeddingModule,
  ReportEmbeddingModule,
  SurveyEmbeddingModule,
  TitleModule,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...materials,
    ...modules,
  ],
  exports: [
    ...components,
  ]
})
export class PortalPageEmbeddingModule { }
