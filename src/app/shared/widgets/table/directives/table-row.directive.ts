import { Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Observable, Subject, isObservable, takeUntil } from 'rxjs';
import { AddressEntity, Maybe } from 'src/app/core/api/generated/schema';
import { Category } from 'src/app/core/typings/category';
import { AddressPieceComponent } from 'src/app/shared/layout/address/address-piece.component';
import { CategoryPieceComponent } from 'src/app/shared/layout/category/category-piece.component';
import { TableRowBooleanComponent } from '../components/rows/table-row-boolean.component';
import { TableRowColorComponent } from '../components/rows/table-row-color.component';
import { TableRowIconComponent } from '../components/rows/table-row-icon.component';
import { Column } from '../typings/table';

@Directive({
  selector: '[appRow]'
})
export class RowDirective<T> implements OnInit, OnDestroy {

  @Input()
  public appRow?: Maybe<T>;

  @Input()
  public column?: Maybe<Column<T>>;

  private destroy = new Subject<void>();

  constructor(
    private viewContainer: ViewContainerRef) { }

  public ngOnInit(): void {
    typeof this.column?.type === 'function'
      ? this.function(this.column?.type(this.appRow as T))
      : this.transform();
  }

  private function(result: Observable<Maybe<string> | undefined> | Maybe<string> | undefined): void {
    isObservable(result)
      ? result.pipe(takeUntil(this.destroy))
          .subscribe(value => this.display = value)
      : this.display = result;
  }

  private transform(): void {
    const value = this.column?.field?.split('.').reduce((obj, field) => (obj as never)?.[field], this.appRow);
    if (value !== undefined && value !== null) {
      switch(this.column?.type) {
        //TODO: Use phone piece and add type
        case 'ADDRESS':
          this.address(value as AddressEntity);
          break;
        case 'CATEGORY':
          this.category(value as Category);
          break;
        case 'COLOR':
          this.color(value as string);
          break;
        case 'BOOLEAN':
          this.boolean(value as boolean);
          break;
        case 'DATE':
          this.display = this.date(value as string);
          break;
        case 'DATETIME':
          this.display = this.dateTime(value as string);
          break;
        case 'ICON':
          this.icon(value as IconProp);
          break;
        case 'TIME':
          this.display = this.time(value as string);
          break;
        case 'LIST':
          this.display = this.count(value as string);
          break;
        default:
          this.display = value as string;
      }
    } else {
      this.display = ' - ';
    }
  }
  
  private address(address: AddressEntity): void {
    this.viewContainer
      .createComponent(AddressPieceComponent)
      .instance.address = address;
  }

  private boolean(value: boolean): void {
    this.viewContainer
      .createComponent(TableRowBooleanComponent)
      .instance.input = value;
  }

  private category(category: Category): void {
    this.viewContainer
      .createComponent(CategoryPieceComponent)
      .instance.category = category;
  }

  private color(color: string): void {
    this.viewContainer
      .createComponent(TableRowColorComponent)
      .instance.input = color;
  }

  private dateTime(value: string): string {
    return `${this.date(value)}, ${this.time(value)}`;
  }

  private date(value: string): string {
    return new Date(value).toLocaleDateString();
  }

  private icon(icon: IconProp): void {
    this.viewContainer
      .createComponent(TableRowIconComponent)
      .instance.icon = icon;
  }

  private time(value: string): string {
    return new Date(value).toLocaleTimeString();
  }

  private count(value: string): string {
    return value.length.toString();
  }

  private set display(value: Maybe<string> | undefined) {
    this.viewContainer.element.nativeElement.innerHTML = value;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
