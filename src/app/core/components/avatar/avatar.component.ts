import { Component, Input } from '@angular/core';
import { Maybe, MediaEntity, UserContextEntity, UserContextMediaEntity } from 'src/schema/schema';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {

  @Input()
  public user?: Maybe<UserContextEntity>;

  @Input()
  public imageSize?: Maybe<string>;

  @Input()
  public fontSize?: Maybe<string>;

  public getMedia(arg0: Maybe<Maybe<UserContextMediaEntity>[]> | undefined): Maybe<MediaEntity> | undefined {
    return arg0?.find(upload => upload?.profilePicture)?.media ?? null;
  }
}