import {Component, Input} from '@angular/core';
import {PointOfInterest} from '../typings/point-of-interest';


@Component({
  styles: [`
    :host {
      padding: 1rem;

      > *:not(:first-child) {
        display: block;
        margin-top: 0.5rem;
      }

      > span {

      }
    }
  `],
  template: `
    <h3>
      {{
        poi?.title
          ? poi?.title
          : poi?.translatables | translatable: poi?.titleTranslatableField | async
      }}
    </h3>
    <app-date-piece *ngIf="poi?.date" [date]="poi?.date" [dateTime]="true">Date</app-date-piece>
    <span>
      {{
        (poi?.text
          ? poi?.text
          : poi?.translatables | translatable: poi?.textTranslatableField | async)
          | stripTags | truncateWords:20
      }}
    </span>
  `
})
export class MapPopupComponent {

  @Input()
  poi?: PointOfInterest;
}
