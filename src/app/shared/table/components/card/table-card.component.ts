import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, startWith, take } from 'rxjs';
import { CardData, CardEntity, CardType } from 'src/app/shared/card/typings/card';
import { Maybe } from 'src/schema/schema';
import { PageableList, Sort, SortOption, SortPaginate } from '../../typings/table';
import { TablePaginatorComponent } from '../paginator/table-paginator.component';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements AfterViewInit, OnDestroy {

  @Input()
  public data?: Observable<Maybe<PageableList<Maybe<CardData>>> | undefined>;

  @Input()
  public noDataLabel = 'noData';

  @Input()
  public sortOptions?: SortOption[];

  @Input()
  public cardType = CardType.Content;

  @Input()
  public entity?: CardEntity;

  @Input()
  public initParams: SortPaginate = {
    page: 0,
    size: 10
  };

  @Input()
  public queryParams = true;

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  @ViewChild(TablePaginatorComponent)
  public paginator!: TablePaginatorComponent;

  private sort?: Sort;

  public types = {
    contact: CardType.Contact,
    content: CardType.Content,
    sponsored: CardType.Sponsored
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  public ngAfterViewInit(): void {
    if (this.queryParams) {
      this.activatedRoute.queryParams
        .pipe(take(1))
        .subscribe((queryParams: SortPaginate) => {
          this.initParams = {
            dir: queryParams?.dir,
            page: queryParams?.page ?? this.initParams?.page ?? 0,
            size: queryParams?.size ?? this.initParams?.size ?? 10,
            sort: queryParams?.sort
          };

          this.paginator.pageIndex = this.initParams.page;
          this.paginator.pageSize = this.initParams.size;

          this.sortPaginate.emit(this.initParams);
        });
    }

    this.paginator?.page
      .pipe(startWith({}))
      .subscribe(() => this.emit());
  }

  public sortChange(sort: Sort): void {
    this.paginator.pageIndex = 0;
    this.sort = sort;
    this.emit();
  }

  private emit(): void {
    const sortPage = Object.assign({
      page: this.paginator.pageIndex,
      size: this.paginator.pageSize,
    }, this.sort);

    if (this.queryParams) {
      this.router.navigate([], {
        queryParams: sortPage,
        queryParamsHandling: 'merge',
      });
    }

    this.sortPaginate.emit(sortPage);
  }

  ngOnDestroy(): void {
    const emptyProps = {
      dir: null,
      sort: null,
      page: null,
      size: null,
    };
    this.sortPaginate.emit(emptyProps);

    if (this.queryParams) {
      this.router.navigate([], {
        queryParams: emptyProps,
        queryParamsHandling: 'merge',
      });
    }
  }

}