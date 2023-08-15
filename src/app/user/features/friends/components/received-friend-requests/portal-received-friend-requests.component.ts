import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectReceivedFriendRequest } from 'src/app/core/state/selectors/user.selectors';
import { CardActionInput, CardActionOutput, CardType } from 'src/app/shared/widgets/card/typings/card';
import { PortalFriendsActions } from '../../state/portal-friends.actions';

@Component({
  selector: 'app-portal-received-friend-requests',
  templateUrl: './portal-received-friend-requests.component.html',
  styleUrls: ['./portal-received-friend-requests.component.scss'],
})
export class PortalReceivedFriendRequestsComponent {

  private confirmLabel = 'confirm';
  private removeLabel = 'remove';

  public actions: CardActionInput[] = [
    {
      label: this.confirmLabel,
      icon: ['fas', 'check']
    },
    {
      label: this.removeLabel,
      icon: ['fas', 'trash']
    },
  ];

  public receivedFriendRequests = this.store.select(selectReceivedFriendRequest).pipe(
    map(receivedFriendRequests => receivedFriendRequests.map(friend => friend?.requester)),
    map(result => ({ result }))
  );

  public cardType = CardType.Contact;

  constructor(
    public store: Store
  ) {
  }

  public actionClicked(action: CardActionOutput) {
    switch(action.label) {
      case this.confirmLabel:
        this.store.dispatch(PortalFriendsActions.acceptFriendRequest(action.element?.id));
        break;
      case this.removeLabel:
        this.store.dispatch(PortalFriendsActions.deleteFriend(action.element?.id));
        break;
    }
  }

}