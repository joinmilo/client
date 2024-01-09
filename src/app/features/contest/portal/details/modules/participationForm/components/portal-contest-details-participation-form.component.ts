import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import {
  ContestEntity,
  Maybe,
  MediaEntity,
  UserContextEntity
} from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { ContestPortalDetailsLandingActions } from '../../landing/state/portal-contest-details-landing.actions';
import { selectContestDetails } from '../../landing/state/portal-contest-details-landing.selectors';
import { ContestPortalDetailsParticipationFormActions } from '../state/contest-portal-details-participation-form.actions';

@Component({
  selector: 'app-portal-contest-details-participation-form',
  templateUrl: './portal-contest-details-participation-form.component.html',
  styleUrls: ['./portal-contest-details-participation-form.component.scss'],
})
export class ContestPortalDetailsParticipationFormComponent {
  public uploadsForm = this.fb.group({
    textSubmission: [undefined as Maybe<string>],
    mediaSubmission: [[] as Maybe<MediaEntity>[]],
  });

  public user?: Maybe<UserContextEntity>;

  public contest: Maybe<ContestEntity>;

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.store
      .select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe((currentUser) => {
        this.user = currentUser;
      });

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
        userContext: { id: this.user?.id },
        textSubmission: this.uploadsForm.value.textSubmission,
        mediaSubmissions: [{
          id: undefined,
          media: this.uploadsForm.value.mediaSubmission?.[0]
        }], 
        contest: { id: this.contest?.id },
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
