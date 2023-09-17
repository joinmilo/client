import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { FilterSortPaginateInput, Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { Column } from 'src/app/shared/widgets/table/typings/table';
import { slug } from '../../../../../../../core/constants/queryparam.constants';
import { ArticleAdminDetailsFavoritesActions } from '../state/article-admin-details-favorites.actions';
import { selectArticleAdminDetailsFavorites } from '../state/article-admin-details-favorites.selectors';




@Component({
  selector: 'app-article-admin-details-favorites',
  templateUrl: './article-admin-details-favorites.component.html',
  styleUrls: ['./article-admin-details-favorites.component.scss']
})
export class ArticleAdminDetailsFavoritesComponent implements OnInit, OnDestroy {

  public favorites = this.store.select(selectArticleAdminDetailsFavorites);

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
        this.updateParams(
          params[slug])
    }
    )
  }

  public updateParams(slug?: Maybe<string>, params?: FilterSortPaginateInput) {
    this.store.dispatch(ArticleAdminDetailsFavoritesActions.updateParams(this.slug ?? slug, params));
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