import { Component } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { PortalMenuService } from '../../../..//portal/common/services/portal-menu.service';
import { selectSocialMedia } from '../../../../portal/common/state/common.selectors';

@Component({
  selector: 'app-social-media-piece',
  templateUrl: './social-media-piece.component.html',
  styleUrls: ['./social-media-piece.component.scss'],
})
export class SocialMediaPieceComponent {

  public socialMedia = this.store.select(selectSocialMedia);

  constructor(
    private store: Store,
    private menuService: PortalMenuService,
  ) { }

  public route(item: Maybe<MenuItemEntity>) {
    this.menuService.route(item);
  }

  public icon(name?: Maybe<string>) {
    return name as IconName;
  }

}
