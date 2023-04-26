import { Component, Input } from '@angular/core';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { mediaApi } from '../../constants/core.constants';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input()
  public alt?: string;

  @Input()
  public maxWidth?: string;

  @Input()
  public maxHeight?: string;

  @Input()
  public image?: Maybe<MediaEntity>;

  @Input()
  public circle = false;

  @Input()
  public border = false;

  @Input()
  public rounded = false;

  @Input()
  public roundedTopLeft = false;

  @Input()
  public roundedTopRight = false;

  @Input()
  public roundedBottomRight = false;

  @Input()
  public roundedBottomLeft = false;

  @Input()
  public src?: string;

  public get ref(): string {
    if (this.src) {
      return this.src;
    }

    return this.image?.id
      ? mediaApi(this.image)
      : '/assets/placeholder.webp';
  }

}
