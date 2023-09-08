import { Component, EventEmitter, Output } from '@angular/core';
import { MediaEntity } from 'src/app/core/api/generated/schema';


@Component({
  selector: 'app-user-media-upload-profile-picture',
  templateUrl: './user-media-upload-profile-picture.component.html',
  styleUrls: ['./user-media-upload-profile-picture.component.scss'],
})
export class UserMediaUploadProfilePictureComponent {

  public profilePicture?: MediaEntity | undefined;

  public addUploads(uploads: MediaEntity[]): void {
    this.profilePicture = uploads[0];
  }

  @Output ()
  profilePictureChanged = new EventEmitter<MediaEntity>()

  public continue(): void {
    if(this.profilePicture)
    this.profilePictureChanged.emit(this.profilePicture);
  }
}