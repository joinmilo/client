import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EventEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { selectEventDetails } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details-organisation',
  templateUrl: './portal-event-details-organisation.component.html',
  styleUrls: ['./portal-event-details-organisation.component.scss'],
})
export class PortalEventDetailsOrganisationComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity> | undefined;

  public media?: Maybe<MediaEntity> | undefined;

  private destroy = new Subject<void>();

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.select(selectEventDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe((event) => {
        this.event = event;
        this.media = event?.organisation?.uploads?.find(upload => upload?.card)?.media;
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
