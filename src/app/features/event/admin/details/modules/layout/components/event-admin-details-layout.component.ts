import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { EventEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/core.constants';
import { RadioCardInput } from 'src/app/shared/form/radio-card/typings/radio-card-input';
import { commentsRoute, favoritesRoute, googleSearchRoute, participantsRoute, ratingsRoute, visitorsRoute } from '../../../constants/event-admin-details.constants';
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
      value: googleSearchRoute
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
      value: participantsRoute
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(EventAdminDetailsLayoutActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectEventAdminDetailsLayout)),
      takeUntil(this.destroy)
    ).subscribe(event => this.event = event);
  }

  public route(route: string): void {
    this.router.navigate([`./${route}`], { relativeTo: this.activatedRoute });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}