import { Component, Input } from '@angular/core';
import { articlesFeatureKey, eventsFeatureKey } from 'src/app/portal/common/constants/common.constants';
import { Maybe, PageFeatureEntity } from 'src/schema/schema';

@Component({
  selector: 'app-page-features',
  templateUrl: './page-features.component.html',
  styleUrls: ['./page-features.component.scss']
})
export class PageFeaturesComponent {

  @Input()
  public pageFeatures?: Maybe<Maybe<PageFeatureEntity>[]>

  public articlesFeatureKey = articlesFeatureKey;
  public eventFeatureKey = eventsFeatureKey;
  
}
