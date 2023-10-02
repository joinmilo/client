import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MediaEntity, SurveyEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { SurveyAdminDetailsLandingActions } from '../state/survey-admin-details-landing.actions';
import { selectSurveyAdminDetailsLanding } from '../state/survey-admin-details-landing.selectors';

@Component({
  selector: 'app-survey-admin-details-landing',
  templateUrl: './survey-admin-details-landing.component.html',
  styleUrls: ['./survey-admin-details-landing.component.scss']
})
export class SurveyAdminDetailsLandingComponent implements OnInit, OnDestroy {

  public survey?: Maybe<SurveyEntity>;

  public media?: Maybe<MediaEntity[]>;

  public expanded = false;
  
  @ViewChild('contentParagraph', { static: true })
  private contentParagraph?: ElementRef<HTMLParagraphElement>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(SurveyAdminDetailsLandingActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectSurveyAdminDetailsLanding)),
      takeUntil(this.destroy)
    ).subscribe(survey => {
      this.survey = survey;
      this.media = survey?.uploads?.map(surveyMedia => surveyMedia?.media)
        ?.slice(0, 10) as MediaEntity[];
    });
  }

  toggleShowMore() {
    this.contentParagraph?.nativeElement.classList.toggle('expanded');
    this.expanded = !this.expanded;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}