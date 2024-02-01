import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SolidIconsType } from 'ngx-cinlib/icons';
import { Subject, takeUntil } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { contentPortalDetailsUrl } from 'src/app/core/constants/url.constants';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContentData, ContentEntity } from 'src/app/core/typings/content-entity';
import { TableActions } from '../../state/table.actions';
import { selectActions, selectEntity, selectInlineEditAction, selectInlineEditActive, selectInlineEditRow } from '../../state/table.selectors';
import { RowAction, RowCustomAction } from '../../typings/table';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent<T> implements OnDestroy {

  @Input({ required: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public row?: Maybe<any>;

  public actions = this.store.select(selectActions);

  public entity?: ContentEntity;

  public inlineEditAction?: RowCustomAction<T>;
  public inlineEditActive = this.store.select(selectInlineEditActive);
  public inlineEditRow = this.store.select(selectInlineEditRow)

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    public authService: AuthService,
  ) {
    this.store.select(selectEntity)
      .pipe(takeUntil(this.destroy))
      .subscribe(entity => this.entity = entity);

    this.store.select(selectInlineEditAction)
      .pipe(takeUntil(this.destroy))
      .subscribe(action => this.inlineEditAction = action);
  }

  public dataAsContent(): ContentData {
    return this.row as ContentData;
  }

  public createUrl(): string | undefined {
    return contentPortalDetailsUrl(this.entity, this.row as ContentData);
  }

  public callback(action: RowAction<T>): void {
    (action as RowCustomAction<T>).callback?.(this.row)
  }

  public icon(action: RowAction<T>): SolidIconsType {
    return (action as RowCustomAction<T>).icon;
  }

  public isDisabled(action: RowAction<T>): boolean {
    return !!(action as RowCustomAction<T>)?.disable?.(this.row);
  }

  public hasPrivileges(action: RowAction<T>): boolean {
    const privileges = (action as RowCustomAction<T>)?.privileges;
    return privileges
      ? this.authService.hasAnyPrivileges(privileges)
      : true;
  }

  public tooltip(action: RowAction<T>): Maybe<string> {
    return (action as RowCustomAction<T>).tooltipLabel;
  }

  public enable(): void {
    this.store.dispatch(TableActions.rowEditEnabled(this.row));
  }

  public save(): void {
    this.store.dispatch(TableActions.rowEdited());
  }

  public cancel(): void {
    this.store.dispatch(TableActions.rowEditCancelled());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}