import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { Maybe, MediaEntity, SurveyEntity } from 'src/schema/schema';
import { PortalSurveyDetailsActions } from '../state/portal-survey-details.actions';
import { selectSurveyDetails } from '../state/portal-survey-details.selectors';

@Component({
  selector: 'app-portal-survey-details',
  templateUrl: './portal-survey-details.component.html',
  styleUrls: ['./portal-survey-details.component.scss']
})
export class PortalSurveyDetailsComponent implements OnInit, OnDestroy {

  public survey?: Maybe<SurveyEntity>;

  public mediaTitle?: Maybe<MediaEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalSurveyDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectSurveyDetails)),
      takeUntil(this.destroy)
    ).subscribe(survey => {
      this.survey = survey;
      this.mediaTitle = survey?.uploads?.find(upload => upload?.title)?.media;
    });

  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
