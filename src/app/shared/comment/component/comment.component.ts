import { Component, Input } from '@angular/core';
import { Maybe } from 'src/schema/schema';
import { Comment } from '../typings/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input()
  public comment?: Maybe<Comment>;
}