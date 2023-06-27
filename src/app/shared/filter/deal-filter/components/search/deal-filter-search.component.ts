import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { DealFilterQueryDefinition } from 'src/app/core/typings/filter-params/deal-filter-param';
import { Maybe } from 'src/schema/schema';
import { DealFilterActions } from '../../state/deal-filter.actions';

@Component({
  selector: 'app-deal-filter-search',
  templateUrl: './deal-filter-search.component.html',
  styleUrls: ['./deal-filter-search.component.scss']
})
export class DealFilterSearchComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public disabled?: Maybe<boolean>;
  
  @Input()
  public queryParamKey = DealFilterQueryDefinition.searchOnly;

  @Output()
  public valueChanged = new EventEmitter<Maybe<boolean> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    this.watchValueChange();
  }

  public ngOnInit(): void {
    this.queryParamKey && this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        const value = params[this.queryParamKey];
        this.control.setValue(value?.toLowerCase?.() === 'true', {
          emitEvent: false,
        });
      });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']) {
      this.disabled
        ? this.control.disable()
        : this.control.enable();
    }
  }

  private watchValueChange(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((value: boolean) => {
        if (this.queryParamKey) {
          this.router.navigate([], {
            queryParams: {
              [this.queryParamKey]: value
            },
            queryParamsHandling: 'merge',
          });
        }

        this.valueChanged.emit(value);
        this.store.dispatch(DealFilterActions.selectedSearchOnly(value));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
  
}
