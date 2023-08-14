import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InfoMediaCategoryEntity, MediaEntity } from 'src/schema/schema';
import { selectOverviewDataCategories } from '../../state/portal-media-overview.selectors';

@Component({
  selector: 'app-portal-media-overview-category',
  templateUrl: './portal-media-overview-category.component.html',
  styleUrls: ['./portal-media-overview-category.component.scss']
})
export class PortalMediaOverviewCategoryComponent {

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
