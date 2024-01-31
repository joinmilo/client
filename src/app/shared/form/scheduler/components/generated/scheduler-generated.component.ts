import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { SchedulerActions } from '../../state/scheduler.actions';
import { selectColumns, selectLefthandColumns } from '../../state/scheduler.selectors';
import { SchedulerOverviewComponent } from '../overview/scheduler-overview.component';

@Component({
  selector: 'app-scheduler-generated',
  templateUrl: './scheduler-generated.component.html',
  styleUrls: ['./scheduler-generated.component.scss'],
})
export class SchedulerGeneratedComponent {

  public leftAssignedColumns = this.store.select(selectLefthandColumns);
  public columns = this.store.select(selectColumns);

  constructor(
    private store: Store,
  ) { }

  public createNewSchedules(): void {    
    this.store.dispatch(SchedulerActions.addNewSchedules());
  }

  public showSchedules(): void {
    this.store.dispatch(CoreActions.setSidenavComponent({
      component: SchedulerOverviewComponent
    }));
  }

}
