import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DealEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { DealAdminDetailsLandingActions } from '../state/deal-admin-details-landing.actions';
import { selectDealAdminDetailsLanding } from '../state/deal-admin-details-landing.selectors';

@Component({
  selector: 'app-deal-admin-details-landing',
  templateUrl: './deal-admin-details-landing.component.html',
  styleUrls: ['./deal-admin-details-landing.component.scss']
})
export class DealAdminDetailsLandingComponent implements OnInit, OnDestroy {

  public deal?: Maybe<DealEntity>;

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
      tap(params => this.store.dispatch(DealAdminDetailsLandingActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectDealAdminDetailsLanding)),
      takeUntil(this.destroy)
    ).subscribe(deal => {
      this.deal = deal;
      this.media = deal?.uploads?.map(dealMedia => dealMedia?.media)
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