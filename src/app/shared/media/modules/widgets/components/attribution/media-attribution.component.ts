import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Maybe, MediaAttributionEntity } from 'src/app/core/api/generated/schema';
import { AttributionDirection } from '../../../../typings/media';

@Component({
  selector: 'app-media-attribution',
  templateUrl: './media-attribution.component.html',
  styleUrls: ['./media-attribution.component.scss'],
})
export class MediaAttributionComponent implements OnInit {

  @Input()
  public attribution?: Maybe<MediaAttributionEntity>;

  @Input()
  public direction: AttributionDirection = 'BOTTOM-RIGHT';

  constructor(
    private elementRef: ElementRef,
  ) {}

  public ngOnInit(): void {
    this.elementRef.nativeElement?.setAttribute('style', this.directionStyle());

    this.elementRef?.nativeElement?.parentElement?.setAttribute('style', 'position: relative;');
  }

  public directionStyle(): string {
    switch (this.direction) {
      case 'TOP-LEFT':
        return 'top: 3px; left: 3px;';
      case 'TOP-RIGHT':
        return 'top: 3px; right: 3px;';
      case 'BOTTOM-LEFT':
        return 'bottom: 3px; left: 3px';
      case 'BOTTOM-RIGHT':
      default:
        return 'bottom: 4px; right: 4px;';
    }
  }

}
