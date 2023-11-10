import { Component, Input, OnChanges } from '@angular/core';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaService } from '../../../../services/media.service';
import { MimeTypeDefinition } from '../../../../typings/media';

@Component({
  selector: 'app-media-title',
  templateUrl: './media-title.component.html',
  styleUrls: ['./media-title.component.scss']
})
export class MediaTitleComponent  implements OnChanges {

  @Input()
  public media?: Maybe<MediaEntity>;

  public mimeType?: Maybe<MimeTypeDefinition>;

  constructor(
    private mediaService: MediaService,
  ) { }

  public ngOnChanges(): void {
    this.mimeType = this.mediaService.mimeTypeDefinition(this.media);
  }
}
