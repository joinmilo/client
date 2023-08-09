import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectSentRequests } from 'src/app/core/state/selectors/user.selectors';
import { CardType } from 'src/app/shared/widgets/card/typings/card';

@Component({
  selector: 'app-portal-sent-friend-requests',
  templateUrl: './portal-sent-friend-requests.component.html',
  styleUrls: ['./portal-sent-friend-requests.component.scss'],
})
export class PortalSentFriendRequestsComponent {

  public sentFriendRequests = this.store.select(selectSentRequests).pipe(
    map(sentFriendRequests => ({
      result: sentFriendRequests,
      total: sentFriendRequests?.length
    }))
  );

  public cardType = CardType.Friends

  constructor(
    public store: Store
  ) { }
}