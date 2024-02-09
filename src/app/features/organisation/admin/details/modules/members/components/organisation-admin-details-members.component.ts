import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Period } from 'ngx-cinlib/core';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe, OrganisationMemberEntity } from 'src/app/core/api/generated/schema';
import { Column, RowAction } from 'src/app/shared/widgets/table/typings/table';
import { slug } from '../../../../../../../core/constants/queryparam.constants';
import { OrganisationAdminDetailsMembersActions } from '../state/organisation-admin-details-members.actions';
import { selectOrganisationAdminDetailsMembers } from '../state/organisation-admin-details-members.selectors';


@Component({
  selector: 'app-organisation-admin-details-members',
  templateUrl: './organisation-admin-details-members.component.html',
  styleUrls: ['./organisation-admin-details-members.component.scss']
})
export class OrganisationAdminDetailsMembersComponent implements OnInit, OnDestroy {

  public members = this.store.select(selectOrganisationAdminDetailsMembers);

  public slug?: Maybe<string>;

  private destroy = new Subject<void>();

  public actions: RowAction<OrganisationMemberEntity>[] = [
    {
      icon: 'user-minus',
      callback: member =>
        this.store.dispatch(OrganisationAdminDetailsMembersActions.deleteMember(member)),
      tooltipLabel: 'removeMember'
    },
    {
      icon: 'toggle-off',
      callback: member =>
        this.store.dispatch(OrganisationAdminDetailsMembersActions.togglePublic(member)),
      tooltipLabel: 'toggleMemberIsPublic'
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
      field: 'isPublic',
      label: 'isPublic',
      type: 'BOOLEAN',
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
    }
    )
  }

  public updateParams(slug?: Maybe<string>, params?: FilterSortPaginateInput) {
    this.store.dispatch(OrganisationAdminDetailsMembersActions.updateParams(this.slug ?? slug, params));
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