import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { GetMenuGQL } from 'src/app/portal/api/generated/get-menu.query.generated';
import { PortalActions } from 'src/app/portal/state/portal.actions';

@Component({
  selector: 'app-portal-menu-overlay',
  templateUrl: './portal-menu-overlay.component.html',
  styleUrls: ['./portal-menu-overlay.component.scss'],
})
export class PortalMenuOverlayComponent implements OnInit {

  @Input()
  public root = false;

  @Input()
  public parent?: Maybe<MenuItemEntity>;
  
  public subMenuItems?: Observable<Maybe<Maybe<MenuItemEntity>[]> | undefined>;

  constructor(
    private store: Store,
    private menuService: GetMenuGQL,
  ) { }

  public ngOnInit(): void {
    this.subMenuItems = of(this.sort(this.parent?.subMenuItems || []));
  }

  public retrieveSubmenu(): void {
    this.subMenuItems = this.menuService
      .watch({ parent: this.parent?.id }).valueChanges
      .pipe(
        map(response => response.data.getMenuItems?.result as MenuItemEntity[]),
        map(items => this.sort(items))
      );
  }

  private sort(items: Maybe<MenuItemEntity>[]): Maybe<MenuItemEntity>[] {
    return [...items]?.sort((i1, i2) => (i1?.order || 0) - (i2?.order || 0));
  }

  public icon(icon: Maybe<string>|undefined): IconName {
    return icon as IconName;
  }

  public route(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(PortalActions.navigateMenu(item));
  }
}