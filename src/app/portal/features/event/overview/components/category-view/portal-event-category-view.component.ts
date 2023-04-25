import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOverviewDataCategories } from '../../state/portal-event-overview.selectors';

@Component({
  selector: 'app-portal-event-category-view',
  templateUrl: './portal-event-category-view.component.html',
  styleUrls: ['./portal-event-category-view.component.scss']
})
export class PortalEventCategoryViewComponent {

  public categories = this.store.select(selectOverviewDataCategories);
  
  constructor(
    private store: Store,
  ) { }

}