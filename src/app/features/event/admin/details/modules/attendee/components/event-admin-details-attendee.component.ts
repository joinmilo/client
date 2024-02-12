import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Column, RowAction } from 'ngx-cinlib/tables';
import { Subject, takeUntil } from 'rxjs';
import { EventAttendeeEntity, FilterSortPaginateInput, Maybe } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { EventAdminDetailsAttendeeActions } from '../state/event-admin-details-attendee.actions';
import { selectEventAdminDetailsAttendee } from '../state/event-admin-details-attendee.selectors';

@Component({
  selector: 'app-event-admin-details-attendee',
  templateUrl: './event-admin-details-attendee.component.html',
  styleUrls: ['./event-admin-details-attendee.component.scss']
})
export class EventAdminDetailsAttendeeComponent implements OnInit, OnDestroy {

  public attendees = this.store.select(selectEventAdminDetailsAttendee);

  public slug?: Maybe<string>;

  private destroy = new Subject<void>();

  public actions: RowAction<EventAttendeeEntity>[] = [
    {
      icon: 'toggle-off',
      callback: attendee =>
      this.store.dispatch(EventAdminDetailsAttendeeActions.saveAttendee(attendee)),
      tooltipLabel: 'toggleApprovedNotApproved'
    },
    {
      icon: 'trash',
      callback: attendee =>
        this.store.dispatch(EventAdminDetailsAttendeeActions.deleteAttendee(attendee)),
      tooltipLabel: 'delete'
    },
  ];

  public columns: Column<EventAttendeeEntity>[] = [
    {
      field: 'userContext.user.firstName',
      label: 'firstName',
      sort: true,
    },
    {
      field: 'userContext.user.lastName',
      label: 'lastName',
      sort: true,
    },
    {
      field: 'created',
      label: 'created',
      type: 'DATETIME',
      sort: true,
    },
    {
      field: 'approved',
      label: 'approved',
      type: 'BOOLEAN',
      sort: true
    }
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.slug = params[slug],
        this.updateParams(params[slug], {})
    }
    )
  }

  public updateParams(slug: Maybe<string>, params?: FilterSortPaginateInput) {
    this.store.dispatch(EventAdminDetailsAttendeeActions.updateParams(this.slug ?? slug, params ));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}