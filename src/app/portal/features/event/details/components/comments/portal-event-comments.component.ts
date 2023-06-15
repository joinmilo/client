import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { eventSlug } from '../../constants/event-details.constant';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';
import { selectEventComments } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-comments',
  templateUrl: './portal-event-comments.component.html',
  styleUrls: ['./portal-event-comments.component.scss']
})
export class PortalEventCommentsComponent implements OnInit, OnDestroy {
  
  public comments = this.store.select(selectEventComments);

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    ) { }
    
  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.store.dispatch(
        PortalEventDetailsActions.getComments(params.get(eventSlug) || '')));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}