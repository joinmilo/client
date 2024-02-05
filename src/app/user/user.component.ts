import { Component } from '@angular/core';
import { LoadingService } from 'ngx-cinlib/layouts/loading';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public loading = this.loadingService.isLoading();

  constructor(
    private loadingService: LoadingService,
  ) { }
}
