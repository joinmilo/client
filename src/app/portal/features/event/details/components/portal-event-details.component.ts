import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';
import { CommentActions } from 'src/app/shared/comment/state/comment.actions';
import { EventEntity, Maybe, MediaEntity, UserContextEntity } from 'src/schema/schema';
import { PortalEventDetailsActions } from '../state/portal-event-details.actions';
import { selectEventDetails } from '../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details',
  templateUrl: './portal-event-details.component.html',
  styleUrls: ['./portal-event-details.component.scss']
})
export class PortalEventDetailsComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity>;

  public titleImage?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  public currentUser?: Maybe<UserContextEntity> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      tap(params => this.store.dispatch(PortalEventDetailsActions.getDetails(params.get(slug) || ''))),
      switchMap(() => this.store.select(selectEventDetails)),
      takeUntil(this.destroy)
    ).subscribe(event => {
      this.event = event;
      this.titleImage = event?.uploads?.find(upload => upload?.title)?.media;
      this.media = event?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(eventMedia => eventMedia?.media) as MediaEntity[];
    });

    this.store.select(selectCurrentUser).pipe(takeUntil(this.destroy))
    .subscribe(user => this.currentUser = user);
  }

  saveRating($event: number) {
    this.store.dispatch(PortalEventDetailsActions.saveEventRating({
      event: {id: this.event?.id},
      userContext: {id: this.currentUser?.id, uploads: this.currentUser?.uploads},
      score: $event,
    }))
    this.store.dispatch(PortalEventDetailsActions.getDetails(this.event?.slug || ''));
  }

  saveContent($event: string) {
    this.store.dispatch(CommentActions.saveEventComment({
      content: $event,
      event: {id: this.event?.id},
      userContext: {id: this.currentUser?.id}
    }))
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}