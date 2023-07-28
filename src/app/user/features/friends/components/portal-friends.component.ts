import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { displayQueryParam } from 'src/app/core/constants/core.constants';
import { RadioInput } from 'src/app/shared/form/radio-button/typings/radio-input';
import { PortalAddFriendsComponent } from './add-friends/portal-add-friends.component';

import { Subject } from 'rxjs';
import { Maybe, UserContextEntity } from 'src/schema/schema';


@Component({
  selector: 'app-portal-friends',
  templateUrl: './portal-friends.component.html',
  styleUrls: ['./portal-friends.component.scss'],
})
export class PortalFriendsComponent {

  public displayType = 'allFriends';

  public displayQueryParam = displayQueryParam;

  public inputs: RadioInput[] = [
    {
      icon: ['fas', 'users'],
      label: 'allFriends',
      value: 'allFriends'
    },
    {
      icon: ['fas', 'inbox'],
      label: 'receivedFriendRequests',
      value: 'receivedRequests'
    },
    {
      icon: ['fas', 'square-arrow-up-right'],
      label: 'sentFriendRequests',
      value: 'sentRequests'
    },
  ];

  public portalUsers?:  Maybe<UserContextEntity[]>;
  
  constructor(
    public store: Store,
    public dialog: MatDialog
  ) {
    
   }

  private destroy = new Subject<void>();

  public addFriends(): void {
    this.dialog.open(PortalAddFriendsComponent, {
      data: this.portalUsers });
  }
}