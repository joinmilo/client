import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { DealEntity, Maybe } from 'src/app/core/api/generated/schema';
import { selectDealDetails } from '../../state/portal-deal-details.selectors';

@Component({
  selector: 'app-portal-deal-details-summary',
  templateUrl: './portal-deal-details-summary.component.html',
  styleUrls: ['./portal-deal-details-summary.component.scss'],
})
export class PortalDealDetailsSummaryComponent implements OnInit, OnDestroy {

  public deal?: Maybe<DealEntity> | undefined;

  private destroy = new Subject<void>();

  @Output()
  public addressClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store) { }
  
  public ngOnInit(): void {
    this.store.select(selectDealDetails)
      .pipe(takeUntil(this.destroy))
      .subscribe(deal => this.deal = deal);
  }

  public onAddressClicked(): void {
    this.addressClicked.emit();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
