import { Component, Input, OnInit } from '@angular/core';
import { Maybe, NavigatorPageEntity } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-navigator-portal-details-layout-page',
  templateUrl: './navigator-portal-details-layout-page.component.html',
  styleUrls: ['./navigator-portal-details-layout-page.component.scss'],
})
export class NavigatorPortalDetailsLayoutPageComponent implements OnInit {

  @Input()
  public page?: Maybe<NavigatorPageEntity>;

  constructor() { }
  ngOnInit(): void {
  }
}