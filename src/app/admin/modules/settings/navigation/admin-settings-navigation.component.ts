import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { IconComponent } from 'ngx-cinlib/icons';
import { map } from 'rxjs';
import { selectAdminSettingsMenu } from 'src/app/admin/state/admin.selectors';
import { AdminMenuItem } from 'src/app/admin/typings/menu';
import { adminUrl, settingsUrl } from 'src/app/core/constants/module.constants';
import { CoreModule } from 'src/app/core/core.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { TitleModule } from 'src/app/shared/layout/title/title.module';

@Component({
  selector: 'app-admin-settings-navigation',
  templateUrl: './admin-settings-navigation.component.html',
  styleUrls: ['./admin-settings-navigation.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,

    IconComponent,

    MatCardModule,
    MatDividerModule,

    RouterModule,
    TitleModule,
  ]
})
export class AdminSettingsNavigationComponent {

  public menuItems = this.store.select(selectAdminSettingsMenu)
    .pipe(
      map(routes => routes.map(route => (
        { ...route, childs: route.childs?.filter(child => child?.privileges
          ? this.authService.hasAnyPrivileges(child.privileges)
          : true)
        }
      )).filter(route => !!route.childs?.length))
    );

  public adminUrl = adminUrl;
  public settingsUrl = settingsUrl;

  constructor(
    private authService: AuthService,
    private store: Store,
  ) { }

  public createRouterLink(child: AdminMenuItem): string[] {
    return child.route
      ? [`/${adminUrl}`, settingsUrl, ...child.route.split('/')]
      : [`/${adminUrl}`, settingsUrl];
  }

}
