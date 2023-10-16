import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MediaEntity, PageEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { PortalPageActions } from '../state/portal-page.actions';
import { selectPage } from '../state/portal-page.selectors';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.scss']
})
export class PortalPageComponent implements OnInit, OnDestroy {

  public page?: Maybe<PageEntity>;

  public mediaTitle?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalPageActions.getPage(params[slug] || ''))),
      switchMap(() => this.store.select(selectPage)),
      takeUntil(this.destroy)
    ).subscribe(page => {

      console.log(page);
      this.page = page;

      this.mediaTitle = page?.uploads?.find(upload => upload?.title)?.media;

      this.media = page?.uploads
        ?.filter(upload => !upload?.title)
        ?.map(eventMedia => eventMedia?.media)
        ?.slice(0, 5) as MediaEntity[];
    })
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
