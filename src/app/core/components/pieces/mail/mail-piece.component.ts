import { Component, Input } from '@angular/core';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-mail-piece',
  templateUrl: './mail-piece.component.html',
  styleUrls: ['./mail-piece.component.scss']
})
export class MailPieceComponent {

  @Input()
  public mail?: Maybe<string>;

  @Input()
  public actionMenu = false;

}
