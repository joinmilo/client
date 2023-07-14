import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { slug, surveysFeatureKey } from 'src/app/core/constants/core.constants';
import { MarkerDefinition } from 'src/app/shared/map/typings/map';
import { Maybe, MediaEntity, SurveyEntity } from 'src/schema/schema';
import { PortalSurveyDetailsActions } from '../state/portal-survey-details.actions';
import { selectSurveyDetails } from '../state/portal-survey-details.selectors';

@Component({
  selector: 'app-portal-survey-details',
  templateUrl: './portal-survey-details.component.html',
  styleUrls: ['./portal-survey-details.component.scss']
})
export class PortalSurveyDetailsComponent implements OnInit, OnDestroy {

  public categoryUrl = surveysFeatureKey;

  public survey?: Maybe<SurveyEntity>;

  public titleImage?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  public marker?: Maybe<MarkerDefinition>;

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
      this.titleImage = survey?.uploads?.find(upload => upload?.title)?.media;

      this.media = survey?.uploads
        ?.filter(upload => !upload?.card && !upload?.title)
        ?.map(surveyMedia => surveyMedia?.media)
        ?.slice(0, 3) as MediaEntity[];
    });

  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}