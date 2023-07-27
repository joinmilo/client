import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { Maybe, MediaEntity, PageEntity } from 'src/schema/schema';
import { PortalMainActions } from '../../state/portal-main.actions';
import { selectCurrentPage } from '../../state/portal-main.selectors';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.scss']
})
export class PortalPageComponent implements OnInit, OnDestroy{

  public page?: Maybe<PageEntity>;

  public titleImage?: Maybe<MediaEntity>;

  public media?: Maybe<Maybe<MediaEntity>[]>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalMainActions.getPage(params[slug] || ''))),
      switchMap(() => this.store.select(selectCurrentPage)),
      takeUntil(this.destroy)
    ).subscribe(page => {
      this.page = page;
      this.titleImage = page?.uploads?.find(upload => upload?.title)?.media;
  })
}

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
