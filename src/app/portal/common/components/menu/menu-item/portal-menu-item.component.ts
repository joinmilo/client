import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { GetMenuGQL, Maybe, MenuItemEntity } from 'src/schema/schema';
import { CommonActions } from '../../../state/common.actions';

@Component({
  selector: 'app-portal-menu-item',
  templateUrl: './portal-menu-item.component.html',
  styleUrls: ['./portal-menu-item.component.scss'],
})
export class PortalMenuItemComponent implements OnInit {

  @Input()
  public root = false;

  @Input()
  public parent?: Maybe<MenuItemEntity>;
  
  public subMenuItems?: Maybe<Maybe<MenuItemEntity>[]>;

  constructor(
    private store: Store,
    private menuService: GetMenuGQL,
  ) { }

  ngOnInit(): void {
    this.subMenuItems = this.parent?.subMenuItems;
  }

  public retrieveSubmenu(): void {
    this.menuService
      .watch({ parent: this.parent?.id })
      .valueChanges
      .pipe(
        map(response => response.data.getMenuItems?.result as MenuItemEntity[]),
      ).subscribe(items => this.subMenuItems = items);
  }

  public hasSubmenu(subItem: Maybe<MenuItemEntity>): boolean {
    return (subItem?.subMenuItems?.length || 0) > 0
  }

  public route(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(CommonActions.navigate(item));
  }
}