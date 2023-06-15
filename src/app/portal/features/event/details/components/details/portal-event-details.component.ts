import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { EventCommentEntity, EventEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { eventSlug } from '../../constants/event-details.constant';
import { selectEventComments, selectEventDetails } from '../../state/portal-event-details.selectors';
import { PortalEventDetailsActions } from './../../state/portal-event-details.actions';

@Component({
  selector: 'app-portal-event-details',
  templateUrl: './portal-event-details.component.html',
  styleUrls: ['./portal-event-details.component.scss']
})
export class PortalEventDetailsComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity> | undefined;

  public latestComment?: Maybe<EventCommentEntity> | undefined;

  public media?: Maybe<MediaEntity> | undefined;

  private destroy = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private store: Store) { }

  ngOnInit() {

    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        const eventParam = params.get(eventSlug) || '';
        this.store.dispatch(PortalEventDetailsActions.getDetails(eventParam));
        this.store.dispatch(PortalEventDetailsActions.getComments(eventParam));
        return this.store.select(selectEventDetails);
      }),
      takeUntil(this.destroy)
    ).subscribe(event => {
      this.event = event;
      this.media = event?.uploads?.find(upload => upload?.title)?.media;
    });

    this.store.select(selectEventComments).pipe(
      takeUntil(this.destroy)
    ).subscribe(comments => {
      this.latestComment = comments?.[0];
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}