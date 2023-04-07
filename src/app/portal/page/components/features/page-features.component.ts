import { Component, Input, OnInit } from '@angular/core';
import { articlesFeatureKey, calendarFeatureKey, eventsFeatureKey } from 'src/app/portal/common/constants/common.constants';
import { Maybe, PageFeatureEntity } from 'src/schema/schema';

@Component({
  selector: 'app-page-features',
  templateUrl: './page-features.component.html',
  styleUrls: ['./page-features.component.scss']
})
export class PageFeaturesComponent implements OnInit {

  @Input()
  public pageFeatures?: Maybe<Maybe<PageFeatureEntity>[]>;

  public articlesFeatureKey = articlesFeatureKey;
  public calendarFeatureKey = calendarFeatureKey;
  public eventFeatureKey = eventsFeatureKey;

  public ngOnInit(): void {
    this.pageFeatures = [...(this.pageFeatures || [])].sort((f1, f2) => (f1?.order || 0) - (f2?.order || 0));
    console.log(this.pageFeatures);
  }
  
}
