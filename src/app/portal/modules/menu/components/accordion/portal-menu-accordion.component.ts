import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { PortalActions } from '../../../../state/portal.actions';
import { selectPortalMenu } from '../../../../state/portal.selectors';

@Component({
  selector: 'app-portal-menu-accordion',
  templateUrl: './portal-menu-accordion.component.html',
  styleUrls: ['./portal-menu-accordion.component.scss']
})
export class PortalMenuAccordionComponent {

  @Input()
  public boldTitle = false;

  @Output()
  public itemSelected = new EventEmitter();

  public menu = this.store.select(selectPortalMenu);

  @ViewChild(MatAccordion, {static: true})
  private panel?: MatAccordion;

  constructor(
    private store: Store,
  ) { }
  
  public navigate(item: Maybe<MenuItemEntity>) {
    this.panel?.closeAll();
    this.store.dispatch(PortalActions.navigateMenu(item));
  }
}
