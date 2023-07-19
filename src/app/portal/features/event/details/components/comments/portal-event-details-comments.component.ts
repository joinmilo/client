import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';
import { selectEventComments } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details-comments',
  templateUrl: './portal-event-details-comments.component.html',
  styleUrls: ['./portal-event-details-comments.component.scss']
})
export class PortalEventDetailsCommentsComponent implements OnInit, OnDestroy {
  
  public comments = this.store.select(selectEventComments);

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    ) { }
    
  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.store.dispatch(
        PortalEventDetailsActions.getComments(params.get(slug) || '')));
  }

  public saveComment(content: string): void {
    this.store.dispatch(PortalEventDetailsActions.saveEventComment({
      content,
    }));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}