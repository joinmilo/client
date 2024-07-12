import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { PageableList } from 'ngx-cinlib/core';
import { FilterService } from 'ngx-cinlib/filters';
import { Sort, SortOption, SortPaginate, TablePaginatorComponent, TableSortComponent } from 'ngx-cinlib/tables';
import { Observable, startWith, take } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ContentData, ContentEntity } from 'src/app/core/typings/content-entity';
import { CardActionInput, CardActionOutput, CardType } from 'src/app/shared/widgets/card/typings/card';
import { CardModule } from '../card/card.module';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
  standalone: true,
  providers: [
    FilterService,
  ],
  imports: [
    CardModule,
    CommonModule,
    MatCardModule,
    TablePaginatorComponent,
    TableSortComponent,
  ]
})
export class TableCardComponent implements AfterViewInit, OnDestroy {

  @Input()
  public actions?: CardActionInput[];

  @Input()
  public data?: Observable<Maybe<PageableList<Maybe<ContentData>>> | undefined>;

  @Input()
  public cardType = CardType.Content;

  @Input()
  public entity?: ContentEntity;

  @Input()
  public initParams: SortPaginate = {
    page: 0,
    size: 10
  };

  @Input()
  public queryParams = true;

  @Input()
  public paginate = true;

  @Input()
  public sortOptions?: SortOption[];

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  @Output()
  public actionClicked = new EventEmitter<CardActionOutput>();

  @ViewChild(TablePaginatorComponent)
  public paginator!: TablePaginatorComponent;

  private sort?: Sort;

  public types = {
    contact: CardType.Contact,
    content: CardType.Content,
    sponsored: CardType.Sponsored,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

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

          if (this.paginator) {
            this.paginator.pageIndex = this.initParams.page;
            this.paginator.pageSize = this.initParams.size;
          }

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

  public ngOnDestroy(): void {
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
