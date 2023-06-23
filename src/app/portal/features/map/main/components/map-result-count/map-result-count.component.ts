import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectResults} from '../../state/map.selector';

@Component({
  selector: 'app-map-result-count',
  templateUrl: './map-result-count.component.html'
})
export class MapResultCountComponent {

  public results = this.store.select(selectResults);

  constructor(private store: Store) {}
}
