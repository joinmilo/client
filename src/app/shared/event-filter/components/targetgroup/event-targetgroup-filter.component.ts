import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { EventTargetGroupEntity, Maybe } from 'src/schema/schema';
import { EventFilterActions } from '../../state/event-filter.actions';
import { selectTargetGroups } from '../../state/event-filter.selectors';

@Component({
  selector: 'app-event-targetgroup-filter',
  templateUrl: './event-targetgroup-filter.component.html',
  styleUrls: ['./event-targetgroup-filter.component.scss']
})
export class EventTargetgroupFilterComponent {

  @Input()
  public queryParamKey?: string;

  @Output()
  public valueChanged = new EventEmitter<Maybe<EventTargetGroupEntity[]> | undefined>();

  public control = new FormControl();

  public targetGroups = this.store.select(selectTargetGroups).pipe(
    tap(targetGroups => !targetGroups?.length
      && this.store.dispatch(EventFilterActions.getTargetGroups()))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private router: Router,
  ) { }

  public changeSelect(value: Maybe<EventTargetGroupEntity[]>) {
    this.valueChanged.emit(value);
    if (this.queryParamKey) {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {
          [this.queryParamKey || '']: value?.map(targetGroup => targetGroup.id)
        },
        queryParamsHandling: 'merge',
      });
    }
  }
  
}
