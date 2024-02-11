import { ShareButtonComponent } from 'ngx-cinlib/share';
import { RowActionComponent } from 'ngx-cinlib/tables';
import { contentPortalDetailsUrl } from 'src/app/core/constants/url.constants';
import { ContentData, ContentEntity } from 'src/app/core/typings/content-entity';
import { FavoriteComponent } from '../../shared/widgets/favorite/favorite.component';

export const likeAction = (entity: ContentEntity): RowActionComponent<ContentData> =>
  (data: ContentData) => ({
    component: FavoriteComponent,
    inputs: {
      entity,
      data
    }
  });

export const shareAction = (entity: ContentEntity): RowActionComponent<ContentData> => 
  (row: ContentData) => ({
    component: ShareButtonComponent,
    inputs: {
      url: contentPortalDetailsUrl(entity, row as ContentData)
    }
  });