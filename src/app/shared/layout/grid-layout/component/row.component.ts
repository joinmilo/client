import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ContentChildren, ElementRef, Input, OnDestroy, QueryList, Renderer2, ViewChild } from '@angular/core';
import { Subject, filter, map, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { maxMobileSize } from 'src/app/core/constants/core.constants';
import { ColumnDirective } from '../directive/column.directive';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent implements AfterViewInit, OnDestroy {

  @Input()
  public columns?: Maybe<number>;

  @Input()
  public includeInMobile = false;

  @ViewChild('container')
  public container?: ElementRef;

  @ContentChildren(ColumnDirective)
  public assignedColumns?: QueryList<ColumnDirective>;

  public maxMobileSize = maxMobileSize;

  private destroy = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
  ) {}

  public ngAfterViewInit(): void {
    this.desktopWidth();
    this.mobileWidth();
  }

  private desktopWidth(): void {
    const childsAmount: Maybe<number> = this.container?.nativeElement.children.length;

    if (childsAmount) {
      const cellWidth = this.columns && this.columns > childsAmount
        ? 100 / this.columns
        : 100 / childsAmount;
  
      Array.from(this.container?.nativeElement.children as HTMLCollection)
        .forEach((element: Element, index: number) => {
          const cellColumns = this.assignedColumns?.get(index)?.appAssignColumns;

          cellColumns
            ? this.setStyle(element, cellWidth * Number(cellColumns))
            : this.setStyle(element, cellWidth);
        });
    }
  }

  private mobileWidth(): void {
    if (!this.includeInMobile) {
      this.breakpointObserver.observe([
        `(max-width: ${this.maxMobileSize}px)`,
        `(min-width: ${this.maxMobileSize}px)`,
      ]).pipe(
        map(() => this.breakpointObserver.isMatched(`(max-width: ${this.maxMobileSize}px)`)),
        filter(isMobile => !!isMobile),
        takeUntil(this.destroy)
      ).subscribe(() => {
        Array.from(this.container?.nativeElement.children as HTMLCollection)
          .forEach((element: Element) => this.setStyle(element, 100, 0))
      });
    }
  }

  private setStyle(element: Element, cellWidth: number, gap = 1) {
    this.renderer.setStyle(element, 'width', `calc(${cellWidth}% - ${gap}rem)`);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}