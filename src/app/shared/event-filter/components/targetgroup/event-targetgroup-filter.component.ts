import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { EventFilterActions } from '../../state/event-filter.actions';
import { selectTargetGroups } from '../../state/event-filter.selectors';

@Component({
  selector: 'app-event-targetgroup-filter',
  templateUrl: './event-targetgroup-filter.component.html',
  styleUrls: ['./event-targetgroup-filter.component.scss']
})
export class EventTargetgroupFilterComponent {

  public control = new FormControl();

  public targetGroups = this.store.select(selectTargetGroups).pipe(
    tap(targetGroups => !targetGroups?.length
      && this.store.dispatch(EventFilterActions.getTargetGroups()))
  );

  constructor(
    private store: Store,
  ) { }
  
}
