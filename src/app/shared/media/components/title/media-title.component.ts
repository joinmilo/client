import { Component, Input, OnChanges } from '@angular/core';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { MimeTypeDefinition } from '../../typings/media';
import { mimeTypeDefinition } from '../../utils/media.utils';

@Component({
  selector: 'app-media-title',
  templateUrl: './media-title.component.html',
  styleUrls: ['./media-title.component.scss']
})
export class MediaTitleComponent  implements OnChanges {

  @Input()
  public media?: Maybe<MediaEntity>;

  public mimeType?: Maybe<MimeTypeDefinition>;

  public ngOnChanges(): void {
    this.mimeType = mimeTypeDefinition(this.media);
  }
}
