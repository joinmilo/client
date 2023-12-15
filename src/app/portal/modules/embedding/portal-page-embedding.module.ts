import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import { PortalPageEmbeddingPluginComponent } from './components/plugin/portal-page-embedding-plugin.component';
import { PortalPageEmbeddingComponent } from './components/portal-page-embedding.component';
import { PortalPageEmbeddingTextMediaComponent } from './components/text-media/portal-page-embedding-text-media.component';

const components = [
  PortalPageEmbeddingComponent,
  PortalPageEmbeddingPluginComponent,
  PortalPageEmbeddingTextMediaComponent,
];

const framework = [
  CommonModule,
];

const modules = [
  ArticleEmbeddingModule,
  AuthorEmbeddingModule,
  CalendarEmbeddingModule,
  ContestEmbeddingModule,
  DealEmbeddingModule,
  EventEmbeddingModule,
  GuestArticleEmbeddingModule,
  MapEmbeddingModule,
  MediaEmbeddingModule,
  OrganisationEmbeddingModule,
  ReportEmbeddingModule,
  SurveyEmbeddingModule,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...framework,
    ...modules,
  ],
  exports: [
    ...components,
  ]
})
export class PortalPageEmbeddingModule { }
