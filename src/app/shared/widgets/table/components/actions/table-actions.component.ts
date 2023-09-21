import { Component, Input } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Maybe } from 'src/app/core/api/generated/schema';
import { contentPortalDetailsUrl } from 'src/app/core/constants/url.constants';
import { ContentData, ContentEntity } from 'src/app/core/typings/content-entity';
import { RowAction, RowCustomAction } from '../../typings/table';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent<T> {

  @Input()
  public actions?: RowAction<T>[];

  @Input({ required: true })
  public data?: Maybe<T>;

  @Input({ required: true })
  public entity?: Maybe<ContentEntity>;

  public maxInline = 4;

  public dataAsContent(): ContentData {
    return this.data as ContentData;
  }

  public createUrl(): string | undefined {
    return contentPortalDetailsUrl(this.entity, this.data as ContentData);
  }

  public callback(action: RowAction<T>): void {
    (action as RowCustomAction<T>).callback?.(this.data)
  }

  public icon(action: RowAction<T>): IconName {
    return (action as RowCustomAction<T>).icon;
  }

  public isDisabled(action: RowAction<T>): boolean {
    return !!(action as RowCustomAction<T>)?.disable?.(this.data);
  }

  public tooltip(action: RowAction<T>): Maybe<string> {
    return (action as RowCustomAction<T>).tooltipLabel;
  }

}