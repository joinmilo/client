import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOverviewDataCategories } from '../../state/event-overview.selectors';

@Component({
  selector: 'app-event-category-view',
  templateUrl: './event-category-view.component.html',
  styleUrls: ['./event-category-view.component.scss']
})
export class EventCategoryViewComponent {

  public categories = this.store.select(selectOverviewDataCategories);
  
  constructor(
    private store: Store,
  ) { }

}