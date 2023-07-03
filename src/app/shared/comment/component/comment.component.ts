import { Component, Input } from '@angular/core';
import { Maybe, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input()
  public content?: Maybe<string>;

  @Input()
  public created?: Maybe<string>;

  @Input()
  public userContext?: Maybe<UserContextEntity>;
}