import { Component, OnDestroy } from "@angular/core";
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, map, takeUntil } from 'rxjs';
import { selectCurrentUser, selectReceivedRequest } from 'src/app/core/state/selectors/user.selectors';
import { CardActionInput, CardActionOutput, CardType } from 'src/app/shared/widgets/card/typings/card';
import { UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from '../../state/portal-friends.actions';

@Component({
  selector: 'app-portal-received-friend-requests',
  templateUrl: './portal-received-friend-requests.component.html',
  styleUrls: ['./portal-received-friend-requests.component.scss'],
})
export class PortalReceivedFriendRequestsComponent implements OnDestroy {

  private currentUser?: Maybe<UserContextEntity>;

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

  public receivedFriendRequests = this.store.select(selectReceivedRequest).pipe(
    map(receivedFriendRequests => ({
      result: receivedFriendRequests
    }))
  );

  public cardType = CardType.Contact;

  private destroy = new Subject<void>();

  constructor(
    public store: Store
  ) {
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(user => this.currentUser = user);
  }

  public actionClicked(action: CardActionOutput) {
    switch(action.label) {
      case this.confirmLabel:
        this.store.dispatch(PortalFriendsActions.acceptFriendRequest(
          {
            id: this.currentUser?.friendAddressee?.filter(friend => friend?.requester?.id == action.element?.id)[0]?.id,
            accepted: true,
          }
        ));
        break;
      case this.removeLabel:
        this.store.dispatch(PortalFriendsActions.deleteFriendEntity(
          this.currentUser?.friendAddressee?.find(friend => friend?.requester?.id === action.element?.id)?.id ||
          this.currentUser?.friendRequester?.find(friend => friend?.addressee?.id === action.element?.id)?.id
        ));
        break;
    }
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}