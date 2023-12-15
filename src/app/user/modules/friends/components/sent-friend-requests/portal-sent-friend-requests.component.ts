import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectSentFriendRequests } from 'src/app/core/state/selectors/user.selectors';
import { CardActionInput, CardActionOutput, CardType } from 'src/app/shared/widgets/card/typings/card';
import { SolidIconsType } from 'src/assets/fontawesome/solid-icons';
import { PortalFriendsActions } from '../../state/portal-friends.actions';

@Component({
  selector: 'app-portal-sent-friend-requests',
  templateUrl: './portal-sent-friend-requests.component.html',
  styleUrls: ['./portal-sent-friend-requests.component.scss'],
})
export class PortalSentFriendRequestsComponent {

  public actions: CardActionInput[] = [
    {
      label: 'remove',
      icon: 'trash' as SolidIconsType
    }
  ];

  public sentFriendRequests = this.store.select(selectSentFriendRequests).pipe(
    map(sentFriendRequests => sentFriendRequests.map(friend => friend?.addressee)),
    map(result => ({ result }))
  );

  public cardType = CardType.Contact;

  constructor(
    public store: Store
  ) { }

  public deleteFriendEntity(action: CardActionOutput): void {
    this.store.dispatch(PortalFriendsActions.deleteFriend(action.element?.id));
  }
}