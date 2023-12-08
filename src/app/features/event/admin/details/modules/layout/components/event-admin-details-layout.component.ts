import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { RadioCardInput } from 'src/app/shared/form/radio-card/typings/radio-card-input';
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
      style: 'fas',
      icon: 'fa-magnifying-glass',
      label: 'overview',
      value: '',
    },
    {
      style: 'far',
      icon: 'fa-eye',
      label: 'pageVisitors',
      value: visitorsRoute
    },
    {
      style: 'fab',
      icon: 'fa-google',
      label: 'googleSearch',
      value: searchRoute
    },
    {
      style: 'far',
      icon: 'fa-comment-dots',
      label: 'comments',
      value: commentsRoute
    },
    {
      style: 'far',
      icon: 'fa-heart',
      label: 'favorites',
      value: favoritesRoute
    },
    {
      style: 'far',
      icon: 'fa-star',
      label: 'ratings',
      value: ratingsRoute
    },
    {
      style: 'fas',
      icon: 'fa-person-circle-check',
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