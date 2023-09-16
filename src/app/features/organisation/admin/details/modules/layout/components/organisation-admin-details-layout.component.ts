import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { OrganisationEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { RadioCardInput } from 'src/app/shared/form/radio-card/typings/radio-card-input';
import { applicationsRoute, commentsRoute, favoritesRoute, membersRoute, ratingsRoute, searchRoute, visitorsRoute } from '../../../constants/organisation-admin-details.constants';
import { OrganisationAdminDetailsLayoutActions } from '../state/organisation-admin-details-layout.actions';
import { selectOrganisationAdminDetailsLayout } from '../state/organisation-admin-details-layout.selectors';

@Component({
  selector: 'app-organisation-admin-details-layout',
  templateUrl: './organisation-admin-details-layout.component.html',
  styleUrls: ['./organisation-admin-details-layout.component.scss']
})
export class OrganisationAdminDetailsLayoutComponent implements OnInit, OnDestroy {

  public organisation?: Maybe<OrganisationEntity>;

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
      icon: ['fas', 'users'],
      label: 'members',
      value: membersRoute
    },
    {
      icon: ['fas', 'user-plus'],
      label: 'applications',
      value: applicationsRoute
    },
  ];

  public initValue = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(OrganisationAdminDetailsLayoutActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectOrganisationAdminDetailsLayout)),
      takeUntil(this.destroy)
    ).subscribe(organisation => {
      const lastUrlSegment = this.router.url.split('?')[0].split('/').pop();
      if (lastUrlSegment && organisation && lastUrlSegment !== organisation?.slug) {
        this.initValue = lastUrlSegment;
      }

      this.organisation = organisation;
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