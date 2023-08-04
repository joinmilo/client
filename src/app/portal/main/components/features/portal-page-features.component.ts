import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { articlesFeatureKey, authorsFeatureKey, calendarFeatureKey, contestsFeatureKey, dealsFeatureKey, eventsFeatureKey, formsFeatureKey, guestArticlesFeatureKey, mapFeatureKey, mediaFeatureKey, organisationsFeatureKey, reportsFeatureKey, surveysFeatureKey } from 'src/app/core/constants/core.constants';
import { Maybe, PageFeatureEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-page-features',
  templateUrl: './portal-page-features.component.html',
  styleUrls: ['./portal-page-features.component.scss']
})
export class PortalPageFeaturesComponent implements OnInit {

  @ViewChild("featureComponents", {read: ViewContainerRef})
  featureComponents!: ViewContainerRef;

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
    map: mapFeatureKey,
    media: mediaFeatureKey,
    organisations: organisationsFeatureKey,
    reports: reportsFeatureKey,
    surveys: surveysFeatureKey,
  }

  public ngOnInit(): void {
    this.pageFeatures = [...(this.pageFeatures || [])].sort((f1, f2) => (f1?.order || 0) - (f2?.order || 0));

    this.loadFeatures();
  }

  async loadFeatures(){

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
    this.featureComponents.clear();

    this.pageFeatures?.forEach(pageFeature => {
      switch (pageFeature?.feature?.key) {
        case 'articles':
          this.featureComponents.createComponent(ArticlePageFeatureComponent);
          break;
        case 'events':
          this.featureComponents.createComponent(EventPageFeatureComponent);
          break;
        case 'calendar':
          this.featureComponents.createComponent(CalendarPageFeatureComponent);
          break;
        case 'reports':
          this.featureComponents.createComponent(ReportPageFeatureComponent);
          break;
        case 'authors':
          this.featureComponents.createComponent(AuthorPageFeatureComponent);
          break;
        case 'organisations':
          this.featureComponents.createComponent(OrganisationPageFeatureComponent);
          break;
        case 'deals':
          this.featureComponents.createComponent(DealPageFeatureComponent);
          break;
        case 'contests':
          this.featureComponents.createComponent(ContestPageFeatureComponent);
          break;
        case 'surveys':
          this.featureComponents.createComponent(SurveyPageFeatureComponent);
          break;
        case 'forms':
          this.featureComponents.createComponent(FormPageFeatureComponent);
          break;
        case 'guestArticle':
          this.featureComponents.createComponent(GuestArticlePageFeatureComponent);
          break;
        case 'map':
          this.featureComponents.createComponent(MapPageFeatureComponent);
          break;
        default:
          break;
      }
    });
  }
}
