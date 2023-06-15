import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, takeUntil } from 'rxjs';
import { MediaEntity } from '../../../../../../schema/schema';
import { authorSlug } from '../constants/portal-author-details.constant';
import { AuthorDetailsActions } from '../state/portal-author-details.actions';
import { selectAuthorDetails } from '../state/portal-author-details.selectors';

@Component({
  selector: 'app-portal-author-details',
  templateUrl: './portal-author-details.component.html',
  styleUrls: ['./portal-author-details.component.scss']
})
export class PortalAuthorDetailsComponent implements OnInit, OnDestroy {

  public author = this.store.select(selectAuthorDetails);

  private destroy = new Subject<void>();

  public media?: Maybe<MediaEntity> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params =>
        this.store.dispatch(AuthorDetailsActions.getDetails(params.get(authorSlug))));

    this.author.pipe(takeUntil(this.destroy))
      .subscribe(author =>
        this.media = author?.uploads?.find(upload => upload?.title)?.media);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
