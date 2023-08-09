import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOverviewDataCategories } from '../../state/portal-media-overview.selectors';
import { InfoMediaCategoryEntity, MediaEntity } from 'src/schema/schema';

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

  public getMedia(category: InfoMediaCategoryEntity): MediaEntity[] | undefined{
    return category.infoMedia?.map((item) => item?.media!);
  }

}
