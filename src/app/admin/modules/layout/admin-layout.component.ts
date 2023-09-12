import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';
import { LayoutService } from 'src/app/core/services/layout.service';
import { selectIsLoading } from 'src/app/core/state/selectors/core.selectors';
import { LoadingComponent } from 'src/app/shared/layout/loading/loading.component';
import { AdminLayoutDesktopComponent } from './desktop/admin-layout-desktop.component';
import { AdminLayoutMobileComponent } from './mobile/admin-layout-mobile.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    AdminLayoutDesktopComponent,
    AdminLayoutMobileComponent,
    LoadingComponent,
    RouterModule,
  ]
})
export class AdminLayoutComponent {

  public loading = this.store.select(selectIsLoading);

  // Display: none does not work for multiple <router-outets> 
  public mobile = this.layoutService.isMobile;

  constructor(
    private layoutService: LayoutService,
    private store: Store,
  ) { }

}
