import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe, OrganisationMemberEntity } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { slug } from '../../../../../../../core/constants/queryparam.constants';
import { OrganisationAdminDetailsApplicationsActions } from '../state/organisation-admin-details-applications.actions';
import { selectOrganisationAdminDetailsApplications } from '../state/organisation-admin-details-applications.selectors';


@Component({
  selector: 'app-organisation-admin-details-applications',
  templateUrl: './organisation-admin-details-applications.component.html',
  styleUrls: ['./organisation-admin-details-applications.component.scss']
})
export class OrganisationAdminDetailsApplicationsComponent implements OnInit, OnDestroy {

  public applications = this.store.select(selectOrganisationAdminDetailsApplications);

  public slug?: Maybe<string>;

  private destroy = new Subject<void>();

  public actions: RowAction<OrganisationMemberEntity>[] = [
    {
      icon: 'user-plus',
      callback: member =>
        this.store.dispatch(OrganisationAdminDetailsApplicationsActions.addMember(member)),
      tooltipLabel: 'addMember'
    },
    {
      icon: 'user-xmark',
      callback: member =>
        this.store.dispatch(OrganisationAdminDetailsApplicationsActions.deleteMember(member)),
      tooltipLabel: 'declineApplication'
    },
  ];

  public columns: Column<OrganisationMemberEntity>[] = [
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
      field: 'userContext.user.email',
      label: 'email',
      sort: true,
    },
    {
      field: 'created',
      label: 'applicationDate',
      type: 'DATETIME',
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
        this.updateParams(
          params[slug])
    }
    )
  }

  public updateParams(slug?: Maybe<string>, params?: FilterSortPaginateInput) {
    this.store.dispatch(OrganisationAdminDetailsApplicationsActions.updateParams(this.slug ?? slug, params));
  }

  public initPeriod: Period = {
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    endDate: new Date()
  }
  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}