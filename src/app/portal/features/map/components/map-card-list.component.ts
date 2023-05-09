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
  styles: [`
    :host {
      display: block;

      hr {
        width: 20%;
        min-width: 36px;
        margin: 0 auto 1rem auto;
      }

      >div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: start;
      }
    }
  `]
})
export class MapCardListComponent {

  @Input()
  public entity!: CardEntity;

  @Input()
  public cards: CardData[] = [];


}
