import { Component, Input } from '@angular/core';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-website-piece',
  templateUrl: './website-piece.component.html',
  styleUrls: ['./website-piece.component.scss']
})
export class WebsitePieceComponent {

  @Input()
  public website?: Maybe<string>;
}
