import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { MediaFilterQueryDefinition } from 'src/app/core/typings/filter-params/media-filter-param';
import { Maybe } from 'src/schema/schema';
import { MediaFilterActions } from '../../state/media-filter.actions';
import { MimeTypeFilterOptions } from '../../typing/media-filter';

@Component({
  selector: 'app-media-filter-type',
  templateUrl: './media-filter-type.component.html',
  styleUrls: ['./media-filter-type.component.scss']
})
export class MediaFilterTypeComponent implements OnInit, OnDestroy {

  @Input()
  public queryParamKey = MediaFilterQueryDefinition.mediaTypes;

  @Output()
  public valueChanged = new EventEmitter<Maybe<string[]> | undefined>();

  public control = new FormControl();

  private destroy = new Subject<void>();

  public mimeTypes = new Map(
    Object.entries(MimeTypeFilterOptions).map(([key, value]) => [
      key.toLowerCase(),
      value.toLowerCase()
    ])
  )

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
      .subscribe((mimeTypes: Maybe<string[]>) => {
        if (this.queryParamKey) {
          this.router.navigate([], {

            queryParams: {
              [this.queryParamKey || '']: mimeTypes
            },
            queryParamsHandling: 'merge',
          });
        }

        this.valueChanged.emit(mimeTypes);
        this.store.dispatch(MediaFilterActions.selectedMediaTypes(mimeTypes));
      });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
