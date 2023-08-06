import { Component, Input, OnInit } from '@angular/core';
import { Maybe, MediaEntity, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-media-avatar',
  templateUrl: './media-avatar.component.html',
  styleUrls: ['./media-avatar.component.scss'],
})
export class MediaAvatarComponent implements OnInit{

  @Input()
  public user?: Maybe<UserContextEntity>;

  public media?: Maybe<MediaEntity> | undefined;

  ngOnInit(): void {
    this.media = this.user?.uploads?.find(upload => upload?.profilePicture)?.media ?? null;
  }
}