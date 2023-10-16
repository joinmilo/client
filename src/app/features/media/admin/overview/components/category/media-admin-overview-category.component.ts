import { Component, OnDestroy } from '@angular/core';
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
    private store: Store,
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

  public delete(medium: Maybe<MediaEntity>): void {
    this.store.dispatch(MediaAdminOverviewActions.deleteMedia(
      this.categories
        ?.flatMap(category => category.infoMedia)
        ?.find(infoMedia => infoMedia?.media?.id == medium?.id) as InfoMediaEntity
    ));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
