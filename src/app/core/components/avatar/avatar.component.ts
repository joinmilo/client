import { Component, Input } from '@angular/core';
import { Maybe, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {

  @Input()
  public user?: Maybe<UserContextEntity>;

}