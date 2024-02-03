import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, SurveyEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { searchRoute, visitorsRoute } from '../../../constants/survey-admin-details.constants';
import { SurveyAdminDetailsLayoutActions } from '../state/survey-admin-details-layout.actions';
import { selectSurveyAdminDetailsLayout } from '../state/survey-admin-details-layout.selectors';

@Component({
  selector: 'app-survey-admin-details-layout',
  templateUrl: './survey-admin-details-layout.component.html',
  styleUrls: ['./survey-admin-details-layout.component.scss']
})
export class SurveyAdminDetailsLayoutComponent implements OnInit, OnDestroy {

  public survey?: Maybe<SurveyEntity>;

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
  ];

  public initValue = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(SurveyAdminDetailsLayoutActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectSurveyAdminDetailsLayout)),
      takeUntil(this.destroy)
    ).subscribe(survey => {
      const lastUrlSegment = this.router.url.split('?')[0].split('/').pop();
      if (lastUrlSegment && survey && lastUrlSegment !== survey?.slug) {
        this.initValue = lastUrlSegment;
      }

      this.survey = survey;
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