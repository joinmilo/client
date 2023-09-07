import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { EventEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { EventAdminDetailsGoogleSearchActions } from '../state/event-admin-details-google-search.actions';
import { selectEventAdminDetailsGoogleSearch } from '../state/event-admin-details-google-search.selectors';
import { GoogleSearchDto } from './../../../../../../../core/api/generated/schema';



@Component({
  selector: 'app-event-admin-details-google-search',
  templateUrl: './event-admin-details-google-search.component.html',
  styleUrls: ['./event-admin-details-google-search.component.scss']
})
export class EventAdminDetailsGoogleSearchComponent implements OnInit, OnDestroy {
test() {
console.log(this.impressions);
}

  public event?: Maybe<EventEntity>;

  private destroy = new Subject<void>();

  public clicks?: Maybe<GoogleSearchDto>;
  public impressions?: Maybe<GoogleSearchDto>;
  public ctr?: Maybe<GoogleSearchDto>;
  public positions?: Maybe<GoogleSearchDto>;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) {
     }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(
      tap(params => this.store.dispatch(EventAdminDetailsGoogleSearchActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectEventAdminDetailsGoogleSearch)),
      takeUntil(this.destroy)
    ).subscribe(event => {
      this.event = event;
      this.clicks = event?.googleSearchEventDetails
      ?.filter(entity => entity?.name === "clicks")[0];
      this.impressions = event?.googleSearchEventDetails
        ?.filter(entity => entity?.name === "impressions")[0];
      this.ctr = event?.googleSearchEventDetails
        ?.filter(entity => entity?.name === "ctr")[0];
      this.positions = event?.googleSearchEventDetails
        ?.filter(entity => entity?.name === "positions")[0];
      console.log(event?.googleSearchEventDetails
        ?.filter(entity => entity?.name === "impressions")[0]);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}