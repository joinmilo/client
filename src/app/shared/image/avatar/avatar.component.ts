import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { Maybe, MediaEntity, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class AvatarComponent implements OnInit{

  @Input()
  public user?: Maybe<UserContextEntity>;

  public media?: Maybe<MediaEntity> | undefined;

  ngOnInit(): void {
    this.media = this.user?.uploads?.find(upload => upload?.profilePicture)?.media ?? null;
  }
}