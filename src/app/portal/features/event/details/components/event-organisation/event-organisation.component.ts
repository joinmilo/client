import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EventEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { selectEventDetails } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-event-organisation',
  templateUrl: './event-organisation.component.html',
  styleUrls: ['./event-organisation.component.scss'],
})
export class EventOrganisationComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity> | undefined;

  public media?: Maybe<MediaEntity> | undefined;

  private destroy = new Subject<void>();

  constructor(private store: Store, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.select(selectEventDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe((event) => {
        this.event = event;
        this.media = event?.organisation?.uploads?.find(upload => upload?.card)?.media;
      }
      )
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
