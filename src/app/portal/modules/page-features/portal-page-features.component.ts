import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { articlesFeatureKey, authorsFeatureKey, calendarFeatureKey, contestsFeatureKey, dealsFeatureKey, eventsFeatureKey, formsFeatureKey, guestArticlesFeatureKey, mapFeatureKey, mediaFeatureKey, organisationsFeatureKey, reportsFeatureKey, surveysFeatureKey } from 'src/app/core/constants/core.constants';
import { PortalArticlePageFeatureModule } from 'src/app/portal/features/article/page-feature/portal-article-page-feature.module';
import { PortalAuthorPageFeatureModule } from 'src/app/portal/features/author/page-feature/portal-author-page-feature.module';
import { PortalCalendarPageFeatureModule } from 'src/app/portal/features/calendar/page-feature/portal-calendar-page-feature.module';
import { PortalContestPageFeatureModule } from 'src/app/portal/features/contest/page-feature/portal-contest-page-feature.module';
import { PortalDealPageFeatureModule } from 'src/app/portal/features/deal/page-feature/portal-deal-page-feature.module';
import { PortalEventPageFeatureModule } from 'src/app/portal/features/event/page-feature/portal-event-page-feature.module';
import { PortalFormPageFeatureModule } from 'src/app/portal/features/form/page-feature/portal-form-page-feature.module';
import { PortalGuestArticlePageFeatureModule } from 'src/app/portal/features/guest-article/page-feature/guest-portal-article-page-feature.module';
import { PortalMapPageFeatureModule } from 'src/app/portal/features/map/page-feature/portal-map-page-feature.module';
import { PortalOrganisationPageFeatureModule } from 'src/app/portal/features/organisation/page-feature/portal-organisation-page-feature.module';
import { PortalReportPageFeatureModule } from 'src/app/portal/features/report/page-feature/portal-report-page-feature.module';
import { PortalSurveyPageFeatureModule } from 'src/app/portal/features/survey/page-feature/portal-survey-page-feature.module';
import { Maybe, PageFeatureEntity } from 'src/schema/schema';
import { PortalMediaPageFeatureModule } from '../../features/media/page-feature/portal-media-page-feature.module';

@Component({
  selector: 'app-portal-page-features',
  templateUrl: './portal-page-features.component.html',
  styleUrls: ['./portal-page-features.component.scss'],
  standalone: true,
  imports: [
    CommonModule,

    PortalArticlePageFeatureModule,
    PortalAuthorPageFeatureModule,
    PortalCalendarPageFeatureModule,
    PortalContestPageFeatureModule,
    PortalDealPageFeatureModule,
    PortalEventPageFeatureModule,
    PortalFormPageFeatureModule,
    PortalGuestArticlePageFeatureModule,
    PortalMapPageFeatureModule,
    PortalMediaPageFeatureModule,
    PortalOrganisationPageFeatureModule,
    PortalReportPageFeatureModule,
    PortalSurveyPageFeatureModule,
  ],
})
export class PortalPageFeaturesComponent implements OnInit {

  @Input()
  public pageFeatures?: Maybe<Maybe<PageFeatureEntity>[]>;

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
  }

  public ngOnInit(): void {
    this.pageFeatures = [...(this.pageFeatures || [])].sort((f1, f2) => (f1?.order || 0) - (f2?.order || 0));
  }

}
