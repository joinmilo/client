import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { TablePaginatorComponent } from 'ngx-cinlib/tables';
import { Subject, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { MarkerDefinition } from 'src/app/shared/widgets/map/typings/map';
import { selectResult } from '../../state/portal-map-overview.selector';

@Component({
  selector: 'app-portal-map-overview-list',
  templateUrl: 'portal-map-overview-list.component.html',
  styleUrls: ['portal-map-overview-list.component.scss']
})
export class PortalMapOverviewListComponent implements AfterViewInit, OnDestroy {

  @ViewChild(TablePaginatorComponent)
  private paginator!: TablePaginatorComponent;

  public result?: Maybe<MarkerDefinition>;

  public start = 0;
  public end = 0;

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
  ) {
    this.store.select(selectResult)
      .pipe(takeUntil(this.destroy))
      .subscribe(result => this.result = result);
  }

  ngAfterViewInit(): void {
    this.start = 0;
    this.end = ((this.paginator.pageIndex || 0) + 1) * (this.paginator.pageSize || 5);
  }

  public pageUpdated(event: PageEvent) {
    const count = Math.max((this.result?.data?.length || 0), 0);
    this.start = event.pageIndex * event.pageSize;
    this.end = this.start < count
      ? Math.min(this.start + event.pageSize, count)
      : this.start + event.pageSize;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
