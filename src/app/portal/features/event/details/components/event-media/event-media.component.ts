import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EventEntity, EventMediaEntity, Maybe } from 'src/schema/schema';
import { selectEventDetails } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-event-media',
  templateUrl: './event-media.component.html',
  styleUrls: ['./event-media.component.scss'],
})
export class EventMediaComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity> | undefined;

  public media?: Maybe<EventMediaEntity>[] | undefined;

  private destroy = new Subject<void>();

  constructor(private store: Store, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.select(selectEventDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe((event) => {
        this.event = event;
        this.media = event?.uploads?.filter(upload => !upload?.card && !upload?.title);
      }
      )
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
