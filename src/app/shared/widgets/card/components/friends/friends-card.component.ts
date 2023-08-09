import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { PortalFriendsActions } from 'src/app/user/features/friends/state/portal-friends.actions';
import { Maybe, UserContextEntity } from 'src/schema/schema';
import { CardData, CardElement, CardEntity } from '../../typings/card';
import { dataToElement } from '../../utils/card.utils';
@Component({
  selector: 'app-friends-card',
  templateUrl: './friends-card.component.html',
  styleUrls: ['./friends-card.component.scss']
})
export class FriendsCardComponent implements OnInit {

  private currentUser?: Maybe<UserContextEntity>;

  @Input()
  public entity?: Maybe<CardEntity>;

  @Input()
  public data?: Maybe<CardData>;

  public element?: Maybe<CardElement>;
  
  @Input()
  public allFriends = false;
  
  @Input()
  public receivedFriendRequests = false;

  @Input()
  public sentFriendRequests = false;

  public confirmRequest() {
    this.store.dispatch(PortalFriendsActions.acceptFriendRequest(
      {
        id: this.currentUser?.friendAddressee?.filter(friend => friend?.requester?.id  == this.element?.id)[0]?.id,
        accepted: true,
      }
    ))
  }

  public deleteFriendEntity() {
    this.store.dispatch(PortalFriendsActions.deleteFriendEntity(
      this.currentUser?.friendAddressee?.find(friend => friend?.requester?.id === this.element?.id)?.id ||
      this.currentUser?.friendRequester?.find(friend => friend?.addressee?.id === this.element?.id)?.id
    ))
  }

  public ngOnInit(): void {
    if (this.entity && this.data) {
      this.element = dataToElement(this.entity, this.data);
    }
    this.store.select(selectCurrentUser).subscribe(user => this.currentUser = user);
  }

  constructor(
    public store: Store
  ) {}
}