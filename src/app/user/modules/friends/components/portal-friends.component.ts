import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { displayQueryParam } from 'src/app/core/constants/queryparam.constants';
import { RadioButtonInput } from 'src/app/shared/form/radio-button/typings/radio-button-input';
import { selectFilteredUsers } from '../state/portal-friends.selectors';
import { PortalAddFriendsComponent } from './add-friends/portal-add-friends.component';

@Component({
  selector: 'app-portal-friends',
  templateUrl: './portal-friends.component.html',
  styleUrls: ['./portal-friends.component.scss'],
})
export class PortalFriendsComponent implements OnInit, OnDestroy {

  public displayType = 'allFriends';

  public displayQueryParam = displayQueryParam;

  private destroy = new Subject<void>();

  public inputs: RadioButtonInput[] = [
    {
      style: 'fas',
      icon: 'fa-users',
      label: 'allFriends',
      value: 'allFriends'
    },
    {
      style: 'fas',
      icon: 'fa-inbox',
      label: 'receivedFriendRequests',
      value: 'receivedRequests'
    },
    {
      style: 'fas',
      icon: 'fa-square-arrow-up-right',
      label: 'sentFriendRequests',
      value: 'sentRequests'
    },
  ];

  public allUsers?:  Maybe<UserContextEntity[]>;
  
  constructor(
    public store: Store,
    public dialog: MatDialog
  ) {}

  public value = '';

  public ngOnInit(): void {
    this.store.select(selectFilteredUsers)
      .pipe(takeUntil(this.destroy))
      .subscribe(allUsers => this.allUsers = allUsers)
  }

  public friendsDialog(): void {  
    this.dialog.open(PortalAddFriendsComponent, {
      autoFocus: false,
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}