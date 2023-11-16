import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { InfoMediaCategoryEntity, InfoMediaEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaAdminOverviewActions } from '../../state/media-admin-overview.actions';
import { selectOverviewDataCategories } from '../../state/media-admin-overview.selectors';

@Component({
  selector: 'app-media-admin-overview-category',
  templateUrl: './media-admin-overview-category.component.html',
  styleUrls: ['./media-admin-overview-category.component.scss']
})
export class MediaAdminOverviewCategoryComponent implements OnDestroy {

  public categories?: InfoMediaCategoryEntity[];

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private router: Router,
  ) {
    this.store.select(selectOverviewDataCategories)
      .pipe(takeUntil(this.destroy))
      .subscribe(categories => this.categories = categories);
  }

  public getMedia(category: InfoMediaCategoryEntity): MediaEntity[] | undefined {
    return category.infoMedia
      ?.filter(item => !!item?.media)
      ?.map((item) => item?.media as MediaEntity);
  }

  public edit(media: Maybe<MediaEntity>): void {
    const infoMedia = this.categories
        ?.flatMap(category => category.infoMedia)
        ?.find(infoMedia => infoMedia?.media?.id === media?.id) as InfoMediaEntity;

    this.router.navigate([infoMedia?.id, 'form'], { relativeTo: this.activatedRoute })
  }

  public delete(medium: Maybe<MediaEntity>): void {
    this.store.dispatch(MediaAdminOverviewActions.deleteMedia(
      this.categories
        ?.flatMap(category => category.infoMedia)
        ?.find(infoMedia => infoMedia?.media?.id === medium?.id) as InfoMediaEntity
    ));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
