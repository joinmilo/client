import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { OrganisationFilterQueryDefinition } from 'src/app/core/typings/filter-params/organisation-filter-param';
import { Maybe } from 'src/schema/schema';
import { OrganisationFilterActions } from '../../state/organisation-filter.actions';

@Component({
  selector: 'app-organisation-filter-active',
  templateUrl: './organisation-filter-active.component.html',
  styleUrls: ['./organisation-filter-active.component.scss']
})
export class OrganisationFilterActiveComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = OrganisationFilterQueryDefinition.activeEvents;

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
        this.store.dispatch(OrganisationFilterActions.selectedActiveOnly(value));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
  
}
