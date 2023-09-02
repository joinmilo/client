import { Component } from '@angular/core';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';


@Component({
  selector: 'app-user-media-upload-title-image',
  templateUrl: './user-media-upload-title-image.component.html',
  styleUrls: ['./user-media-upload-title-image.component.scss'],
})
export class UserMediaUploadTitleImageComponent {

  public mediaTitle?: Maybe<MediaEntity>;

  public addUploads(uploads: MediaEntity[]): void {
    this.mediaTitle = uploads[0];
  }
}