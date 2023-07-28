import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectFriends } from 'src/app/core/state/selectors/user.selectors';
import { CardType } from 'src/app/shared/card/typings/card';


@Component({
  selector: 'app-portal-all-friends',
  templateUrl: './portal-all-friends.component.html',
  styleUrls: ['./portal-all-friends.component.scss'],
})
export class PortalAllFriendsComponent {

  public friends = this.store.select(selectFriends).pipe(
    map(friends => ({
      result: friends,
      total: friends?.length
    }))
  );

  public cardType = CardType.Contact

  constructor(
    public store: Store
  ) { }

 }