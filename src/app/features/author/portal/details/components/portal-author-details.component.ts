import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, MediaEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { PortalAuthorDetailsActions } from '../state/portal-author-details.actions';
import { selectAuthorDetails } from '../state/portal-author-details.selectors';

@Component({
  selector: 'app-portal-author-details',
  templateUrl: './portal-author-details.component.html',
  styleUrls: ['./portal-author-details.component.scss']
})
export class PortalAuthorDetailsComponent implements OnInit, OnDestroy {

  public author?: Maybe<UserContextEntity>;

  private destroy = new Subject<void>();
  
  public media?: Maybe<MediaEntity[]> | undefined;

  public mediaTitle?: Maybe<MediaEntity> | undefined;
  

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
      this.mediaTitle = author?.uploads?.find(upload => upload?.title)?.media;

      this.media = author?.uploads
        ?.filter(upload => !upload?.profilePicture && !upload?.title)
        ?.map(eventMedia => eventMedia?.media)
        ?.slice(0, 10) as MediaEntity[];
    })
  }

  public ngOnDestroy(): void {
    this.store.dispatch(PortalAuthorDetailsActions.reset());
    this.destroy.next();
    this.destroy.complete();
  }
}
