import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InfoMediaCategoryEntity, MediaEntity } from 'src/app/core/api/generated/schema';
import { selectOverviewDataCategories } from '../../state/media-admin-overview.selectors';

@Component({
  selector: 'app-media-admin-overview-category',
  templateUrl: './media-admin-overview-category.component.html',
  styleUrls: ['./media-admin-overview-category.component.scss']
})
export class MediaAdminOverviewCategoryComponent {

  public categories = this.store.select(selectOverviewDataCategories);

  constructor(
    private store: Store,
  ) { }

  public getMedia(category: InfoMediaCategoryEntity): MediaEntity[] | undefined {
    return category.infoMedia
      ?.filter(item => !!item?.media)
      ?.map((item) => item?.media as MediaEntity);
  }

}
