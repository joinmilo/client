import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { EventEntity, MediaEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/core.constants';
import { EventAdminDetailsLandingActions } from '../state/event-admin-details-landing.actions';
import { selectEventAdminDetailsLanding } from '../state/event-admin-details-landing.selectors';

@Component({
  selector: 'app-event-admin-details-landing',
  templateUrl: './event-admin-details-landing.component.html',
  styleUrls: ['./event-admin-details-landing.component.scss']
})
export class EventAdminDetailsLandingComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity>;

  public media?: Maybe<MediaEntity[]>;

  public expanded = false;
  
  @ViewChild('contentParagraph', { static: true })
  private contentParagraph?: ElementRef<HTMLParagraphElement>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(EventAdminDetailsLandingActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectEventAdminDetailsLanding)),
      takeUntil(this.destroy)
    ).subscribe(event => {
      this.event = event;
      this.media = event?.uploads?.map(eventMedia => eventMedia?.media)
        ?.slice(0, 10) as MediaEntity[];
    });
  }

  toggleShowMore() {
    this.contentParagraph?.nativeElement.classList.toggle('expanded');
    this.expanded = !this.expanded;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}