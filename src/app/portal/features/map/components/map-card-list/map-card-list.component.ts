import {Component, Input} from '@angular/core';
import {CardData, CardEntity} from 'src/app/shared/card/typings/card';


@Component({
  selector: 'app-map-card-list',
  template: `
    <hr>
    <div>
      <app-content-card *ngFor="let card of cards" [entity]="entity" [data]="card"></app-content-card>
    </div>
  `,
  styleUrls: ["map-card-list.component.scss"]
})
export class MapCardListComponent {

  @Input()
  public entity!: CardEntity;

  @Input()
  public cards: CardData[] = [];


}
