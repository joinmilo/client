import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil, tap } from 'rxjs';
import { MediaEntity, PageEntity } from 'src/schema/schema';
import { PortalLandingActions } from '../state/portal-landing.actions';
import { selectLandingPage } from '../state/portal-landing.selectors';

@Component({
  selector: 'app-portal-landing',
  templateUrl: './portal-landing.component.html',
  styleUrls: ['./portal-landing.component.scss'],
})
export class PortalLandingComponent implements OnInit, OnDestroy {

  private destroy = new Subject<void>();

  public page?: Maybe<PageEntity>;

  public media?: Maybe<MediaEntity> | undefined;

  constructor(
    private store: Store,
  ) {
    console.log('test')
  }

  ngOnInit(): void {
    this.store.select(selectLandingPage)
    .pipe(
      tap(landing => !landing?.id
        && this.store.dispatch(PortalLandingActions.getLandingPage())),
      takeUntil(this.destroy)
    ).subscribe(page => {
      this.page = page;
      this.media = page?.uploads?.find(upload => upload?.title)?.media;
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
