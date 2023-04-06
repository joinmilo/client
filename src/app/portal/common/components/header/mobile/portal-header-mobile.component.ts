import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonActions } from '../../../state/common.actions';
import { selectIsSearching } from '../../../state/common.selectors';

@Component({
  selector: 'app-portal-header-mobile',
  templateUrl: './portal-header-mobile.component.html',
  styleUrls: ['./portal-header-mobile.component.scss'],
  animations: [
    trigger('inOutAnim', [
      transition(':enter', 
      [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
    ]),
    trigger('inOutAnimSearch', [
      transition(':enter', 
      [
        style({ opacity: 0, transform: 'scaleX(0)'}),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scaleX(1)'}))
      ]),
    ])]
})
export class PortalHeaderMobileComponent {

  @ViewChild('search') 
   search: any

  public isSearching?: boolean;

  private outsideClickListener?: (() => void);

  constructor(
    private store: Store,
    private renderer: Renderer2,
    private elementRef: ElementRef,

  ) {}

  ngOnInit(): void {
     this.store.select(selectIsSearching).subscribe(isSearching => {
      this.isSearching = isSearching;
  });
  }

  setSearching() {
    this.store.dispatch(CommonActions.setSearchState(true));
    if (this.isSearching) {
      this.outsideClickListener = this.renderer.listen('document', 'click', (event) => {
        if (!this.search.nativeElement.contains(event.target)) {
          this.isSearching = false;
          this.store.dispatch(CommonActions.setSearchState(false));
          if (this.outsideClickListener) {
            this.outsideClickListener();
        }
      }
      });
    }
  }

  ngOnDestroy() {
    if (this.outsideClickListener) {
      this.outsideClickListener();
    }
  }
}