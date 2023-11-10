import { Directive, Input, OnChanges, ViewContainerRef } from '@angular/core';
import { Maybe, MediaAttributionEntity } from 'src/app/core/api/generated/schema';
import { MediaAttributionComponent } from '../modules/widgets/components/attribution/media-attribution.component';
import { AttributionDirection } from '../typings/media';

@Directive({
  selector: 'img[appAttribution]'
})
export class MediaAttributionDirective implements OnChanges {

  @Input()
  public appAttribution?: Maybe<MediaAttributionEntity>;

  @Input()
  public direction: AttributionDirection = 'BOTTOM-RIGHT';

  constructor(
    private viewContainer: ViewContainerRef) { }

  public ngOnChanges(): void {
    this.viewContainer.clear();
    if (this.appAttribution) {
      const component = this.viewContainer
        .createComponent(MediaAttributionComponent)
        .instance;

      component.attribution = this.appAttribution;
      component.direction = this.direction;
    }
  }

}
