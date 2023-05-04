import { Component, Input } from '@angular/core';
import { CommentsElement } from '../typings/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input()
  
  public element?: CommentsElement;
}