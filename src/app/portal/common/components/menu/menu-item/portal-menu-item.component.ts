import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { CommonActions } from '../../../state/common.actions';

@Component({
  selector: 'app-portal-menu-item',
  templateUrl: './portal-menu-item.component.html',
  styleUrls: ['./portal-menu-item.component.scss'],
})
export class PortalMenuItemComponent implements OnInit {

  @Input()
  public menuItem?: Maybe<MenuItemEntity>;
  
  @Input()
  public root = false;

  public hasSubmenu?: Maybe<boolean> = false;

  isLoading = false;
  dataLoaded = false;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    console.log(this.menuItem?.subMenuItems, (this.menuItem?.subMenuItems?.length || 0) > 0)
    this.hasSubmenu = (this.menuItem?.subMenuItems?.length || 0) > 0;
  }

  public route(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(CommonActions.navigate(item));
  }

  getData(node: string) {
    if (!this.dataLoaded) {
      this.isLoading = true;
      // this.database.getChildren(node).subscribe((d) => {
      //   this.data = d?.slice() || [];
      //   this.isLoading = false;
      //   this.dataLoaded = true;
      // });
    }
  }

}