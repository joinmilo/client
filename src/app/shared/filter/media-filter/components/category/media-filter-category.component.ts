import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { MediaFilterQueryDefinition } from 'src/app/core/typings/filter-params/media-filter-param';
import { Maybe } from 'src/schema/schema';
import { selectCategories } from '../../state/media-filter.selectors';
import { MediaFilterActions } from '../../state/media-filter.actions';

@Component({
  selector: 'app-media-filter-category',
  templateUrl: './media-filter-category.component.html',
  styleUrls: ['./media-filter-category.component.scss']
})
export class MediaFilterCategoryComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = MediaFilterQueryDefinition.mediaCategories;

  @Output()
  public valueChanged = new EventEmitter<Maybe<string[]> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  public categories = this.store.select(selectCategories)

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    this.store.dispatch(MediaFilterActions.getCategories());
    this.watchValueChange();
  }

  public ngOnInit(): void {
    this.queryParamKey && this.activatedRoute.queryParams
      .pipe(takeUntil(this.destroy))
      .subscribe(params => {
        const value = typeof params[this.queryParamKey] === 'string'
          ? [params[this.queryParamKey]]
          : params[this.queryParamKey];

        this.control.setValue(value, {
          emitEvent: false,
        });
      });
  }

  private watchValueChange(): void {
    this.control.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((ids: Maybe<string[]>) => {
        if (this.queryParamKey) {
          this.router.navigate([], {

            queryParams: {
              [this.queryParamKey || '']: ids
            },
            queryParamsHandling: 'merge',
          });
        }

        this.valueChanged.emit(ids);
        this.store.dispatch(MediaFilterActions.selectedCategories(ids));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
