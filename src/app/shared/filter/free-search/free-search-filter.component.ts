import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Maybe } from 'ngx-cinlib/core';
import { FilterService } from 'ngx-cinlib/filters';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';

@Component({
  selector: 'app-free-search-filter',
  templateUrl: './free-search-filter.component.html',
  styleUrls: ['./free-search-filter.component.scss'],
  standalone: true,
  imports: [
    I18nDirective,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class FreeSearchFilterComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = FilterQueryDefinition.freeSearch;

  @Output()
  public valueChanged = new EventEmitter<Maybe<boolean> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  constructor(
    private filterService: FilterService
  ) {
    this.watchValueChange();
  }

  public ngOnInit(): void {
    if(this.queryParamKey) {
      this.filterService.queryParams()
        .pipe(takeUntil(this.destroy))
        .subscribe(params => {
          this.control.setValue(params?.[this.queryParamKey], {
            emitEvent: false,
          });
        });
    }
  }

  private watchValueChange(): void {
    this.control.valueChanges
      .pipe(
        debounceTime(750),
        distinctUntilChanged(),
        takeUntil(this.destroy)
      )
      .subscribe(value => {
        this.valueChanged.emit(value);
        if (this.queryParamKey) {
          this.filterService.updateParam(this.queryParamKey, value);
        }
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
  
}
