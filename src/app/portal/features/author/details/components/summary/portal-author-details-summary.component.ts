import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { MediaEntity, UserContextEntity } from 'src/schema/schema';
import { PortalAuthorDetailsActions } from '../../state/portal-author-details.actions';
import { selectAuthorDetails } from '../../state/portal-author-details.selectors';


@Component({
  selector: 'app-portal-author-details-summary',
  templateUrl: './portal-author-details-summary.component.html',
  styleUrls: ['./portal-author-details-summary.component.scss']
})
export class PortalAuthorDetailsSummaryComponent implements OnInit, OnDestroy {

  public author?: Maybe<UserContextEntity>;

  private destroy = new Subject<void>();

  public titleImage?: Maybe<MediaEntity> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(PortalAuthorDetailsActions.getDetails(params[slug] || ''))),
      switchMap(() => this.store.select(selectAuthorDetails)),
      takeUntil(this.destroy)
    ).subscribe(author => {
      this.author = author;
      this.titleImage = author?.uploads?.find(upload => upload?.title)?.media;
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
