import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { PortalMenuActions } from '../../state/portal-menu.actions';
import { selectPortalMenu } from '../../state/portal-menu.selectors';

@Component({
  selector: 'app-portal-menu-accordion',
  templateUrl: './portal-menu-accordion.component.html',
  styleUrls: ['./portal-menu-accordion.component.scss']
})
export class PortalMenuAccordionComponent {

  @Input()
  public boldTitle = false;

  @Output()
  public itemSelected = new EventEmitter<Maybe<MenuItemEntity>>();

  public menu = this.store.select(selectPortalMenu);

  @ViewChild(MatAccordion, {static: true})
  private panel?: MatAccordion;

  constructor(
    private store: Store,
  ) { }
  
  public navigate(item: Maybe<MenuItemEntity>) {
    this.itemSelected.emit(item);
    this.panel?.closeAll();
    this.store.dispatch(PortalMenuActions.navigateMenu(item));
  }
}
