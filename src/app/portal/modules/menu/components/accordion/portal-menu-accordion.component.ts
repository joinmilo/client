import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { PortalActions } from '../../../../state/portal.actions';
import { selectPortalHeaderOnlyMenu, selectPortalMenu } from '../../../../state/portal.selectors';

@Component({
  selector: 'app-portal-menu-accordion',
  templateUrl: './portal-menu-accordion.component.html',
  styleUrls: ['./portal-menu-accordion.component.scss']
})
export class PortalMenuAccordionComponent implements OnInit, OnChanges {

  @Input()
  public boldTitle = false;

  @Input()
  public headerOnly = true;

  @Output()
  public itemSelected = new EventEmitter();

  public menu?: Observable<Maybe<MenuItemEntity[]>>;

  @ViewChild(MatAccordion, {static: true})
  private panel?: MatAccordion;

  constructor(
    private store: Store,
  ) { }

  public ngOnInit(): void {
    this.initMenu();
  }

  public ngOnChanges(): void {
    this.initMenu();
  }

  private initMenu(): void {
    this.menu = this.headerOnly
      ? this.store.select(selectPortalHeaderOnlyMenu)
      : this.store.select(selectPortalMenu);
  }

  public sort(items: Maybe<Maybe<MenuItemEntity>[]>): Maybe<MenuItemEntity>[] | undefined {
    return items?.sort((i1, i2) => (i1?.order || 0) - (i2?.order || 0));
  }
  
  public navigate(item: Maybe<MenuItemEntity>) {
    this.panel?.closeAll();
    this.store.dispatch(PortalActions.navigateMenu(item));
  }
}
