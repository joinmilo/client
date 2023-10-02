import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { ContestEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { ContestAdminDetailsLandingActions } from '../state/contest-admin-details-landing.actions';
import { selectContestAdminDetailsLanding } from '../state/contest-admin-details-landing.selectors';

@Component({
  selector: 'app-contest-admin-details-landing',
  templateUrl: './contest-admin-details-landing.component.html',
  styleUrls: ['./contest-admin-details-landing.component.scss']
})
export class ContestAdminDetailsLandingComponent implements OnInit, OnDestroy {

  public contest?: Maybe<ContestEntity>;

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
      tap(params => this.store.dispatch(ContestAdminDetailsLandingActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectContestAdminDetailsLanding)),
      takeUntil(this.destroy)
    ).subscribe(contest => {
      this.contest = contest;
      this.media = contest?.uploads?.map(contestMedia => contestMedia?.media)
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