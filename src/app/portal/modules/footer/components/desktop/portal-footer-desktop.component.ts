import { Component, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/app/core/api/generated/schema';
import { SchemaService } from 'src/app/core/services/schema.service';
import { PortalActions } from 'src/app/portal/state/portal.actions';
import { selectPortalMenu } from 'src/app/portal/state/portal.selectors';

@Component({
  selector: 'app-portal-footer-desktop',
  templateUrl: './portal-footer-desktop.component.html',
  styleUrls: ['./portal-footer-desktop.component.scss']
})
export class PortalFooterDesktopComponent {

  public menu = this.store.select(selectPortalMenu);

  constructor(
    private renderer: Renderer2,
    private schemaService: SchemaService,
    private store: Store,
  ) {
    console.log('footer', this.menu?.subscribe(items => items?.map(item => item.feature?.name)))
   }
  
  public navigate(item: Maybe<MenuItemEntity>) {
    this.store.dispatch(PortalActions.navigateMenu(item));
  }

  // ngOnInit(): void {
  // if (this.menu) {
  //   this.schemaService.setJsonLd(this.renderer, this.menu);
  //   }
  // } 

}
