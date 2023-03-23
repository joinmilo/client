import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class PortalSearchResultComponent {


  constructor(
    private store: Store,
  ) {
  }


}
