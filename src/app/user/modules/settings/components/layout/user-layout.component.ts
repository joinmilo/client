import { Component } from '@angular/core';
import { LoadingService } from 'ngx-cinlib/layouts/loading';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent {

  public loading = this.loadingService.isLoading();

  constructor(
    private loadingService: LoadingService,
  ) { }
}
