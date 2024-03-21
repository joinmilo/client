import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'ngx-cinlib/core';
import { take } from 'rxjs';
import { MediaEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-admin-header-desktop',
  templateUrl: './admin-header-desktop.component.html',
  styleUrls: ['./admin-header-desktop.component.scss'],
})
export class AdminHeaderDesktopComponent implements OnInit{

  public user?: Maybe<UserContextEntity>;

  public media?: Maybe<MediaEntity>;

  constructor(
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.store.select(selectCurrentUser).pipe(take(1)).subscribe(user => {
      this.media = user?.uploads?.find(upload => upload?.profilePicture)?.media ?? null
      this.user = user;
    });
  }

}