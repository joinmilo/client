import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-portal-event-filters',
  templateUrl: './portal-event-filters.component.html',
  styleUrls: ['./portal-event-filters.component.scss']
})
export class PortalEventFiltersComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store, 
  ) {
  }

}