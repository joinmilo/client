import { Component, OnDestroy } from "@angular/core";
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, map, takeUntil } from 'rxjs';
import { selectCurrentUser, selectSentRequests } from 'src/app/core/state/selectors/user.selectors';
import { CardActionInput, CardActionOutput, CardType } from 'src/app/shared/widgets/card/typings/card';
import { UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from '../../state/portal-friends.actions';

@Component({
  selector: 'app-portal-sent-friend-requests',
  templateUrl: './portal-sent-friend-requests.component.html',
  styleUrls: ['./portal-sent-friend-requests.component.scss'],
})
export class PortalSentFriendRequestsComponent implements OnDestroy {

  public actions: CardActionInput[] = [
    {
      label: 'remove',
      icon: ['fas', 'trash']
    }
  ];

  private currentUser?: Maybe<UserContextEntity>;

  public sentFriendRequests = this.store.select(selectSentRequests).pipe(
    map(sentFriendRequests => ({
      result: sentFriendRequests
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

  public deleteFriendEntity(action: CardActionOutput): void {
    this.store.dispatch(PortalFriendsActions.deleteFriendEntity(
      this.currentUser?.friendAddressee?.find(friend => friend?.requester?.id === action.element?.id)?.id ||
      this.currentUser?.friendRequester?.find(friend => friend?.addressee?.id === action.element?.id)?.id
    ));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}