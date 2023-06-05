import { Component, Input, OnInit } from '@angular/core';
import { Maybe, MediaEntity, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit{

  @Input()
  public user?: Maybe<UserContextEntity>;

  public media?: Maybe<MediaEntity> | undefined;

  
  ngOnInit(): void {
    this.media = this.user?.uploads?.find(upload => upload?.profilePicture)?.media ?? null;
  }
}