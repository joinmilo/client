import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, of } from 'rxjs';
import { GetMenuGQL, Maybe, MenuItemEntity } from 'src/schema/schema';
import { CommonActions } from '../../../../state/common.actions';

@Component({
  selector: 'app-portal-header-desktop-menu',
  templateUrl: './portal-header-desktop-menu.component.html',
  styleUrls: ['./portal-header-desktop-menu.component.scss'],
})
export class PortalHeaderDesktopMenuComponent implements OnInit {

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

  public route(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(CommonActions.navigate(item));
  }
}