import { Component, EventEmitter, Output } from '@angular/core';
import { MediaEntity } from 'src/app/core/api/generated/schema';


@Component({
  selector: 'app-user-media-upload-title-image',
  templateUrl: './user-media-upload-title-image.component.html',
  styleUrls: ['./user-media-upload-title-image.component.scss'],
})
export class UserMediaUploadTitleImageComponent {

  public mediaTitle?: MediaEntity | undefined;

  public addUploads(uploads: MediaEntity[]): void {
    this.mediaTitle = uploads[0];
  }

  @Output ()
  mediaTitleChanged = new EventEmitter<MediaEntity>()

  public continue(): void {
    if(this.mediaTitle)
    this.mediaTitleChanged.emit(this.mediaTitle);
  }
}