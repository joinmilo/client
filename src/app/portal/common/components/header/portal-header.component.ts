<<<<<<< Upstream, based on main
import { Component } from '@angular/core';
=======
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { CommonActions } from '../../state/common.actions';
import { selectSearchQuery, selectSearchResult } from './../../state/common.selectors';
>>>>>>> 5e84cf4 #497 search-result-view

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.scss']
})
export class PortalHeaderComponent {
}
