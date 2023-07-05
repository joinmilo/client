import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { EventEntity } from 'src/schema/schema';
import { selectEventDetails } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details-summary',
  templateUrl: './portal-event-details-summary.component.html',
  styleUrls: ['./portal-event-details-summary.component.scss'],
})
export class PortalEventDetailsSummrayComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity> | undefined;

  private destroy = new Subject<void>();

  @Output()
  public addressClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store) { }
  
  public ngOnInit(): void {
    this.store.select(selectEventDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe(event => this.event = event);
  }

  public onAddressClicked(): void {
    this.addressClicked.emit();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
