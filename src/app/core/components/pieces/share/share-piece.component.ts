import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-piece',
  templateUrl: './share-piece.component.html',
  styleUrls: ['./share-piece.component.scss'],
})
export class SharePieceComponent<T> {

  @Input()
  public entity?: T;

}
