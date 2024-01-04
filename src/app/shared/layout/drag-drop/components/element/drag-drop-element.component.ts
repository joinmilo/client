import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-drag-drop-element',
  templateUrl: './drag-drop-element.component.html',
  styleUrls: ['./drag-drop-element.component.scss'],
})
export class DragDropElementComponent {
  
  @Input()
  public title?: Maybe<string>;

  @Input()
  public titleLabel?: Maybe<string>;

  @Input()
  public subTitle?: Maybe<string>;

  @Input()
  public subTitleLabel?: Maybe<string>;

  @Input()
  public expanded: Maybe<boolean> = false;

  @Input()
  public expandable: Maybe<boolean> = true;

  @ViewChild('template')
  public template!: TemplateRef<unknown>;

  public changeExpansion(): void {
    if (this.expandable) {
      this.expanded = !this.expanded;
    }
  }

}
