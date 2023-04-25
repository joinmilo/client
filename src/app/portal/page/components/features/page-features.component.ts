import { Component, Input, OnInit } from '@angular/core';
import { articlesFeatureKey, calendarFeatureKey, eventsFeatureKey, reportFeatureKey } from 'src/app/core/constants/core.constants';
import { Maybe, PageFeatureEntity } from 'src/schema/schema';

@Component({
  selector: 'app-page-features',
  templateUrl: './page-features.component.html',
  styleUrls: ['./page-features.component.scss']
})
export class PageFeaturesComponent implements OnInit {

  @Input()
  public pageFeatures?: Maybe<Maybe<PageFeatureEntity>[]>;

  public features = {
    article: articlesFeatureKey,
    calendar: calendarFeatureKey,
    event: eventsFeatureKey,
    report: reportFeatureKey,
  }

  public ngOnInit(): void {
    this.pageFeatures = [...(this.pageFeatures || [])].sort((f1, f2) => (f1?.order || 0) - (f2?.order || 0));
  }
  
}
