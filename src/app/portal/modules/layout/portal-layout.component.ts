import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingComponent, LoadingService } from 'ngx-cinlib/layouts/loading';
import { PortalFooterModule } from '../footer/portal-footer.module';
import { PortalHeaderModule } from '../header/portal-header.module';

@Component({
  selector: 'app-portal-layout',
  templateUrl: './portal-layout.component.html',
  styleUrls: ['./portal-layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    LoadingComponent,
    PortalFooterModule,
    PortalHeaderModule,
  ]
})
export class PortalLayoutComponent {

  public loading = this.loadingService.isLoading();

  constructor(
    private loadingService: LoadingService,
  ) { }
}
