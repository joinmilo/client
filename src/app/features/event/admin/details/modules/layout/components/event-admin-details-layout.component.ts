import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { attendeeRoute, commentsRoute, favoritesRoute, ratingsRoute, searchRoute, visitorsRoute } from '../../../constants/event-admin-details.constants';
import { EventAdminDetailsLayoutActions } from '../state/event-admin-details-layout.actions';
import { selectEventAdminDetailsLayout } from '../state/event-admin-details-layout.selectors';

@Component({
  selector: 'app-event-admin-details-layout',
  templateUrl: './event-admin-details-layout.component.html',
  styleUrls: ['./event-admin-details-layout.component.scss']
})
export class EventAdminDetailsLayoutComponent implements OnInit, OnDestroy {

  public event?: Maybe<EventEntity>;

  private destroy = new Subject<void>();

  public inputs: RadioCardInput[] = [
    {
      icon: ['fas', 'magnifying-glass'],
      label: 'overview',
      value: '',
    },
    {
      icon: ['far', 'eye'],
      label: 'pageVisitors',
      value: visitorsRoute
    },
    {
      icon: ['fab', 'google'],
      label: 'googleSearch',
      value: searchRoute
    },
    {
      icon: ['far', 'comment-dots'],
      label: 'comments',
      value: commentsRoute
    },
    {
      icon: ['far', 'heart'],
      label: 'favorites',
      value: favoritesRoute
    },
    {
      icon: ['far', 'star'],
      label: 'ratings',
      value: ratingsRoute
    },
    {
      icon: ['fas', 'person-circle-check'],
      label: 'participants',
      value: attendeeRoute
    },
  ];

  public initValue = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(EventAdminDetailsLayoutActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectEventAdminDetailsLayout)),
      takeUntil(this.destroy)
    ).subscribe(event => {
      const lastUrlSegment = this.router.url.split('?')[0].split('/').pop();
      if (lastUrlSegment && event && lastUrlSegment !== event?.slug) {
        this.initValue = lastUrlSegment;
      }

      this.event = event;
    });
  }

  public route(route: string): void {
    this.router.navigate([`./${route}`], { relativeTo: this.activatedRoute });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}