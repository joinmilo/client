import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from '../../icon/icon.component';
import { TextViewerComponent } from '../viewer/text-viewer.component';

@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.scss'],
  standalone: true,
  imports: [IconComponent, CommonModule, CoreModule, MatButtonModule],
})
export class TextElementComponent implements OnInit {
  @Input()
  public text?: Maybe<string>;

  public modifiedText?: Maybe<string>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.prepareText();
  }

  public click(): void {
    this.dialog.open(TextViewerComponent, {
      data: this.text,
      autoFocus: false,
      panelClass: 'media-dialog',
    });
  }

  private prepareText(): void {
    if (this.text != null) {
      const doc = new DOMParser().parseFromString(this.text, 'text/html');

      doc.querySelectorAll('a').forEach((link) => {
        const textContent = doc.createTextNode(link.textContent || '');
        link.parentNode?.replaceChild(textContent, link);
      });

      const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

      headings.forEach(heading => {
        const boldElement = doc.createElement('h3'); 
        boldElement.textContent = heading.textContent || '';
        heading.parentNode?.replaceChild(boldElement, heading);
      });;
      this.modifiedText = doc.body.innerHTML;
    }
  }
}
