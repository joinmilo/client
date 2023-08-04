import { Component, Injector, Input, OnInit, ViewChild, ViewContainerRef, createNgModule } from '@angular/core';
import { articlesFeatureKey, authorsFeatureKey, calendarFeatureKey, contestsFeatureKey, dealsFeatureKey, eventsFeatureKey, formsFeatureKey, guestArticlesFeatureKey, mapFeatureKey, mediaFeatureKey, organisationsFeatureKey, reportsFeatureKey, surveysFeatureKey } from 'src/app/core/constants/core.constants';

import { Maybe, PageFeatureEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-page-features',
  templateUrl: './portal-page-features.component.html',
  styleUrls: ['./portal-page-features.component.scss']
})
export class PortalPageFeaturesComponent implements OnInit {

  @ViewChild("featureComponents", { read: ViewContainerRef })
  featureComponents!: ViewContainerRef;

  @Input()
  public pageFeatures?: Maybe<Maybe<PageFeatureEntity>[]>;

  public features = {
    articles: { articlesFeatureKey },
    authors: authorsFeatureKey,
    calendar: calendarFeatureKey,
    contests: contestsFeatureKey,
    deals: dealsFeatureKey,
    events: eventsFeatureKey,
    forms: formsFeatureKey,
    guestArticle: guestArticlesFeatureKey,
    map: mapFeatureKey,
    media: mediaFeatureKey,
    organisations: organisationsFeatureKey,
    reports: reportsFeatureKey,
    surveys: surveysFeatureKey,
  }

  constructor(private injector: Injector) { }

  public ngOnInit(): void {
    this.pageFeatures = [...(this.pageFeatures || [])].sort((f1, f2) => (f1?.order || 0) - (f2?.order || 0));

    this.loadFeatures();
  }

  async loadFeatures() {

    const { ArticlePageFeatureComponent } = await import("./../../../features/article/page-feature/component/article-page-feature.component");
    const { EventPageFeatureComponent } = await import("./../../../features/event/page-feature/component/event-page-feature.component");
    const { CalendarPageFeatureComponent } = await import("./../../../features/calendar/page-feature/component/calendar-page-feature.component");
    const { ReportPageFeatureComponent } = await import("./../../../features/report/page-feature/component/report-page-feature.component");
    const { AuthorPageFeatureComponent } = await import("./../../../features/author/page-feature/component/author-page-feature.component");
    const { OrganisationPageFeatureComponent } = await import("./../../../features/organisation/page-feature/component/organisation-page-feature.component");
    const { DealPageFeatureComponent } = await import("./../../../features/deal/page-feature/component/deal-page-feature.component");
    const { ContestPageFeatureComponent } = await import("./../../../features/contest/page-feature/component/contest-page-feature.component");
    const { SurveyPageFeatureComponent } = await import("./../../../features/survey/page-feature/component/survey-page-feature.component");
    const { FormPageFeatureComponent } = await import("./../../../features/form/page-feature/component/form-page-feature.component");
    const { GuestArticlePageFeatureComponent } = await import("./../../../features/guest-article/page-feature/component/guest-article-page-feature.component");
    const { MapPageFeatureComponent } = await import("./../../../features/map/page-feature/component/map-page-feature.component");

    const { PortalArticlePageFeatureModule } = await import("src/app/portal/features/article/page-feature/portal-article-page-feature.module");
    const articleModuleRef = createNgModule(PortalArticlePageFeatureModule, this.injector);

    const { PortalEventPageFeatureModule } = await import("src/app/portal/features/event/page-feature/portal-event-page-feature.module");
    const eventModuleRef = createNgModule(PortalEventPageFeatureModule, this.injector);
    
    const { PortalCalendarPageFeatureModule } = await import("src/app/portal/features/calendar/page-feature/portal-calendar-page-feature.module");
    const calendarModuleRef = createNgModule(PortalCalendarPageFeatureModule, this.injector);
    
    const { PortalReportPageFeatureModule } = await import("src/app/portal/features/report/page-feature/portal-report-page-feature.module");
    const reportModuleRef = createNgModule(PortalReportPageFeatureModule, this.injector);

    const { PortalAuthorPageFeatureModule } = await import("src/app/portal/features/author/page-feature/portal-author-page-feature.module");
    const authorModuleRef = createNgModule(PortalAuthorPageFeatureModule, this.injector);

    const { PortalOrganisationPageFeatureModule } = await import("src/app/portal/features/organisation/page-feature/portal-organisation-page-feature.module");
    const organisationModuleRef = createNgModule(PortalOrganisationPageFeatureModule, this.injector);

    const { PortalDealPageFeatureModule } = await import("src/app/portal/features/deal/page-feature/portal-deal-page-feature.module");
    const dealModuleRef = createNgModule(PortalDealPageFeatureModule, this.injector);

    const { PortalContestPageFeatureModule } = await import("src/app/portal/features/contest/page-feature/portal-contest-page-feature.module");
    const contestModuleRef = createNgModule(PortalContestPageFeatureModule, this.injector);

    const { PortalSurveyPageFeatureModule } = await import("src/app/portal/features/survey/page-feature/portal-survey-page-feature.module");
    const surveyModuleRef = createNgModule(PortalSurveyPageFeatureModule, this.injector);

    const { PortalFormPageFeatureModule } = await import("src/app/portal/features/form/page-feature/portal-form-page-feature.module");
    const formModuleRef = createNgModule(PortalFormPageFeatureModule, this.injector);

    const { PortalGuestArticlePageFeatureModule } = await import("src/app/portal/features/guest-article/page-feature/portal-guest-article-page-feature.module");
    const guestArticleModuleRef = createNgModule(PortalGuestArticlePageFeatureModule, this.injector);
    
    const { PortalMapPageFeatureModule } = await import("./../../../features/map/page-feature/portal-map-page-feature.module");
    const mapModuleRef = createNgModule(PortalMapPageFeatureModule, this.injector);

    this.featureComponents.clear();
    
    this.pageFeatures?.forEach(pageFeature => {
      switch (pageFeature?.feature?.key) {
        case 'articles':
          this.featureComponents.createComponent(ArticlePageFeatureComponent, { ngModuleRef: articleModuleRef });
          break;
        case 'events':
          this.featureComponents.createComponent(EventPageFeatureComponent, { ngModuleRef: eventModuleRef });
          break;
        case 'calendar':
          this.featureComponents.createComponent(CalendarPageFeatureComponent, { ngModuleRef: calendarModuleRef });
          break;
        case 'reports':
          this.featureComponents.createComponent(ReportPageFeatureComponent, { ngModuleRef: reportModuleRef });
          break;
        case 'authors':
          this.featureComponents.createComponent(AuthorPageFeatureComponent, { ngModuleRef: authorModuleRef });
          break;
        case 'organisations':
          this.featureComponents.createComponent(OrganisationPageFeatureComponent, { ngModuleRef: organisationModuleRef });
          break;
        case 'deals':
          this.featureComponents.createComponent(DealPageFeatureComponent, { ngModuleRef: dealModuleRef });
          break;
        case 'contests':
          this.featureComponents.createComponent(ContestPageFeatureComponent, { ngModuleRef: contestModuleRef });
          break;
        case 'surveys':
          this.featureComponents.createComponent(SurveyPageFeatureComponent, { ngModuleRef: surveyModuleRef });
          break;
        case 'forms':
          this.featureComponents.createComponent(FormPageFeatureComponent, { ngModuleRef: formModuleRef });
          break;
        case 'guestArticle':
          this.featureComponents.createComponent(GuestArticlePageFeatureComponent, { ngModuleRef: guestArticleModuleRef });
          break;
        case 'map':
          this.featureComponents.createComponent(MapPageFeatureComponent, { ngModuleRef: mapModuleRef });
          break;
        default:
          break;
      }
    });
  }
}
