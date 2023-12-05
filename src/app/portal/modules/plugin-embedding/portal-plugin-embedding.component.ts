import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, PageEmbeddingEntity, PluginEntity } from 'src/app/core/api/generated/schema';
import { articlesFeatureKey, authorsFeatureKey, calendarFeatureKey, contestsFeatureKey, dealsFeatureKey, eventsFeatureKey, formsFeatureKey, guestArticlesFeatureKey, mapFeatureKey, mediaFeatureKey, organisationsFeatureKey, reportsFeatureKey, surveysFeatureKey } from 'src/app/core/constants/feature.constants';
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
import { GetPluginGQL } from '../../api/generated/get-plugin.query.generated';

@Component({
  selector: 'app-portal-plugin-embedding',
  templateUrl: './portal-plugin-embedding.component.html',
  styleUrls: ['./portal-plugin-embedding.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    
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
  ],
})
export class PortalPluginEmbeddingComponent implements OnInit, OnChanges {
  
  @Input({ required: true })
  public embedding?: Maybe<PageEmbeddingEntity>;

  public plugin?: Maybe<PluginEntity>;

  private destroy = new Subject<void>();

  public features = {
    articles: articlesFeatureKey,
    authors: authorsFeatureKey,
    calendar: calendarFeatureKey,
    contests: contestsFeatureKey,
    deals: dealsFeatureKey,
    events: eventsFeatureKey,
    forms: formsFeatureKey,
    guestArticle: guestArticlesFeatureKey,
    media: mediaFeatureKey,
    map: mapFeatureKey,
    organisations: organisationsFeatureKey,
    reports: reportsFeatureKey,
    surveys: surveysFeatureKey,
  };

  constructor(
    private getPluginService: GetPluginGQL,
  ) { }

  public ngOnInit(): void {
    this.retrievePlugin(); 
  }

  public ngOnChanges(): void {
    this.retrievePlugin();
  }

  private retrievePlugin(): void {
    this.getPluginService.watch({
      entity: {
        id: this.embedding?.attributes?.[0]?.references?.[0]?.referenceId
      }
    }).valueChanges
    .pipe(takeUntil(this.destroy))
    .subscribe(response => this.plugin = response.data.getPlugin)
  }

}
