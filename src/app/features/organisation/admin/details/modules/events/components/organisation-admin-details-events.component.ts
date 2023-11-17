import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { Column } from 'src/app/shared/widgets/table/typings/table';
import { slug } from '../../../../../../../core/constants/queryparam.constants';
import { OrganisationAdminDetailsEventsActions } from '../state/organisation-admin-details-events.actions';
import { selectOrganisationAdminDetailsEvents } from '../state/organisation-admin-details-events.selectors';




@Component({
  selector: 'app-organisation-admin-details-events',
  templateUrl: './organisation-admin-details-events.component.html',
  styleUrls: ['./organisation-admin-details-events.component.scss']
})
export class OrganisationAdminDetailsEventsComponent implements OnInit, OnDestroy {

  public events = this.store.select(selectOrganisationAdminDetailsEvents);

  public slug?: Maybe<string>;

  private destroy = new Subject<void>();

  public columns: Column<UserContextEntity>[] = [
    {
      field: 'user.firstName',
      label: 'firstName',
      sort: true,
    },
    {
      field: 'user.lastName',
      label: 'lastName',
      sort: true,
    },
    {
      field: 'user.email',
      label: 'email',
      sort: true,
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.slug = params[slug],
        this.updateParams(params[slug])
    })
  }

  public updateParams(slug?: Maybe<string>, params?: FilterSortPaginateInput) {
    this.store.dispatch(OrganisationAdminDetailsEventsActions.updateParams(this.slug ?? slug, params));
  }
  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}