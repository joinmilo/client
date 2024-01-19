import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import {
  ContestEntity,
  Maybe,
  MediaEntity,
} from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { ContestPortalDetailsLandingActions } from '../../landing/state/portal-contest-details-landing.actions';
import { selectContestDetails } from '../../landing/state/portal-contest-details-landing.selectors';
import { ContestPortalDetailsParticipationFormActions } from '../state/contest-portal-details-participation-form.actions';
import { ParticipationType } from '../typings/participation';

@Component({
  selector: 'app-portal-contest-details-participation-form',
  templateUrl: './portal-contest-details-participation-form.component.html',
  styleUrls: ['./portal-contest-details-participation-form.component.scss'],
})
export class ContestPortalDetailsParticipationFormComponent {
  public uploadsForm = this.fb.group({
    textSubmission: ['' as Maybe<string>],
    mediaSubmission: [[] as Maybe<MediaEntity>[]],
  });

  public contest: Maybe<ContestEntity>;

  private destroy = new Subject<void>();

  public image = ParticipationType.Image;

  public video = ParticipationType.Video;

  public text = ParticipationType.Text;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap((params) =>
          this.store.dispatch(
            ContestPortalDetailsLandingActions.getDetails(params[slug] || '')
          )
        ),
        switchMap(() => this.store.select(selectContestDetails)),
        takeUntil(this.destroy)
      )
      .subscribe((contest) => {
        this.contest = contest;
      });
  }

  public saved(): void {
    this.store.dispatch(
      ContestPortalDetailsParticipationFormActions.saveParticipation({
        textSubmission:
          this.contest?.type?.code === ParticipationType.Text
            ? this.uploadsForm.value.textSubmission
            : null,

        mediaSubmissions:
          this.contest?.type?.code === ParticipationType.Video ||
          this.contest?.type?.code === ParticipationType.Image
            ? [
                {
                  id: undefined,
                  media: this.uploadsForm.value.mediaSubmission?.[0],
                },
              ]
            : null,
        contest: {
          id: this.contest?.id,
          maxParticipations: this.contest?.maxParticipations,
        },
      })
    );
  }

  public cancelled(): void {
    this.store.dispatch(
      ContestPortalDetailsParticipationFormActions.cancelled()
    );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
