import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil, tap } from 'rxjs';
import { MediaEntity, PageEntity } from 'src/schema/schema';
import { PortalMainActions } from '../../state/portal-main.actions';
import { selectCurrentPage } from '../../state/portal-main.selectors';

@Component({
  selector: 'app-portal-landing',
  templateUrl: './portal-landing.component.html',
  styleUrls: ['./portal-landing.component.scss']
})
export class PortalLandingComponent implements OnInit, OnDestroy {

  private destroy = new Subject<void>();

  public page?: Maybe<PageEntity>;

  public media?: Maybe<MediaEntity> | undefined;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.select(selectCurrentPage)
    .pipe(
      tap(landing => !landing?.id
        && this.store.dispatch(PortalMainActions.getLandingPage())),
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
