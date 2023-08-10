import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectReceivedRequest } from 'src/app/core/state/selectors/user.selectors';
import { CardType } from 'src/app/shared/widgets/card/typings/card';

@Component({
  selector: 'app-portal-received-friend-requests',
  templateUrl: './portal-received-friend-requests.component.html',
  styleUrls: ['./portal-received-friend-requests.component.scss'],
})
export class PortalReceivedFriendRequestsComponent {

  public receivedFriendRequests = this.store.select(selectReceivedRequest).pipe(
    map(receivedFriendRequests => ({
      result: receivedFriendRequests
    }))
  );

  public cardType = CardType.Friends

  constructor(
    public store: Store
  ) { }
}