import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { DealEntity, Maybe, MediaEntity } from 'src/schema/schema';
import { selectDealDetails } from '../../state/portal-deal-details.selectors';

@Component({
  selector: 'app-portal-deal-details-creator',
  templateUrl: './portal-deal-details-creator.component.html',
  styleUrls: ['./portal-deal-details-creator.component.scss'],
})
export class PortalDealDetailsCreatorComponent implements OnInit, OnDestroy {

  public deal?: Maybe<DealEntity> | undefined;

  public profilePicture?: Maybe<MediaEntity> | undefined;

  private destroy = new Subject<void>();

  constructor(private store: Store) { }

  public ngOnInit(): void {
    this.store.select(selectDealDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe((deal) => {
        this.deal = deal;
        this.profilePicture = deal?.creator?.uploads?.find(upload => upload?.profilePicture)?.media;
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
