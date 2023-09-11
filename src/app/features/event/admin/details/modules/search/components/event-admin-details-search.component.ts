import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Period } from 'src/app/core/typings/period';
import { EventAdminDetailsSearchActions } from '../state/event-admin-details-search.actions';
import { selectSearchStatistics } from '../state/event-admin-details-search.selectors';



@Component({
  selector: 'app-event-admin-details-search',
  templateUrl: './event-admin-details-search.component.html',
  styleUrls: ['./event-admin-details-search.component.scss']
})
export class EventAdminDetailsSearchComponent {

  public dataSets = this.store.select(selectSearchStatistics);
  
  public colorScheme: Color = {
    group: ScaleType.Time,
    name: 'test',
    selectable: true,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private store: Store) { }

  public updateParams($event: Period): void {
    this.store.dispatch(EventAdminDetailsSearchActions.updateParams($event));
  }

}