import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ContestEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { RadioCardInput } from 'src/app/shared/form/radio-card/typings/radio-card-input';
import { commentsRoute, searchRoute } from '../../../constants/contest-admin-details.constants';
import { ContestAdminDetailsLayoutActions } from '../state/contest-admin-details-layout.actions';
import { selectContestAdminDetailsLayout } from '../state/contest-admin-details-layout.selectors';

@Component({
  selector: 'app-contest-admin-details-layout',
  templateUrl: './contest-admin-details-layout.component.html',
  styleUrls: ['./contest-admin-details-layout.component.scss']
})
export class ContestAdminDetailsLayoutComponent implements OnInit, OnDestroy {

  public contest?: Maybe<ContestEntity>;

  private destroy = new Subject<void>();

  public inputs: RadioCardInput[] = [
    {
      icon: ['fas', 'magnifying-glass'],
      label: 'overview',
      value: '',
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
  ];

  public initValue = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(ContestAdminDetailsLayoutActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectContestAdminDetailsLayout)),
      takeUntil(this.destroy)
    ).subscribe(contest => {
      const lastUrlSegment = this.router.url.split('?')[0].split('/').pop();
      if (lastUrlSegment && contest && lastUrlSegment !== contest?.slug) {
        this.initValue = lastUrlSegment;
      }

      this.contest = contest;
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