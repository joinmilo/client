import { Component } from '@angular/core';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';


@Component({
  selector: 'app-user-media-upload-profile-picture',
  templateUrl: './user-media-upload-profile-picture.component.html',
  styleUrls: ['./user-media-upload-profile-picture.component.scss'],
})
export class UserMediaUploadProfilePictureComponent {

  public profilePicture?: Maybe<MediaEntity>;

  public addUploads(uploads: MediaEntity[]): void {
    this.profilePicture = uploads[0];
  }
}