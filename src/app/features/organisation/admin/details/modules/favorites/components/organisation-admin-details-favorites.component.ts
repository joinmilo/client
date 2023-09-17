import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { Column } from 'src/app/shared/widgets/table/typings/table';
import { slug } from '../../../../../../../core/constants/queryparam.constants';
import { OrganisationAdminDetailsFavoritesActions } from '../state/organisation-admin-details-favorites.actions';
import { selectOrganisationAdminDetailsFavorites } from '../state/organisation-admin-details-favorites.selectors';




@Component({
  selector: 'app-organisation-admin-details-favorites',
  templateUrl: './organisation-admin-details-favorites.component.html',
  styleUrls: ['./organisation-admin-details-favorites.component.scss']
})
export class OrganisationAdminDetailsFavoritesComponent implements OnInit, OnDestroy {

  public favorites = this.store.select(selectOrganisationAdminDetailsFavorites);

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
    this.store.dispatch(OrganisationAdminDetailsFavoritesActions.updateParams(this.slug ?? slug, params));
  }
  
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}