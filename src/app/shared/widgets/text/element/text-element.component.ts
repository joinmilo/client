import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { IconComponent } from 'ngx-cinlib/icons';
import { Maybe } from 'src/app/core/api/generated/schema';
import { TextViewerComponent } from '../viewer/text-viewer.component';
@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    MatButtonModule
  ],
})
export class TextElementComponent{
  
  @Input()
  public set text(text: Maybe<string>){
    this.cardText = this.prepareText(text);
    this._text = text;
  }  

  public _text?: Maybe<string>;

  public cardText?: Maybe<string>;

  constructor(public dialog: MatDialog) {}

  public click(): void {
    this.dialog.open(TextViewerComponent, {
      data: this._text,
      autoFocus: false,
      panelClass: 'media-dialog',
    });
  }

  private prepareText(text: Maybe<string>): Maybe<string> {
    if (text!= null) {
      const doc = new DOMParser().parseFromString(text, 'text/html');

      doc.querySelectorAll('a').forEach((link) => {
        const textContent = doc.createTextNode(link.textContent || '');
        link.parentNode?.replaceChild(textContent, link);
      });

      const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

      headings.forEach(heading => {
        const boldElement = doc.createElement('h3'); 
        boldElement.textContent = heading.textContent || '';
        heading.parentNode?.replaceChild(boldElement, heading);
      });
      return doc.body.innerHTML;
    }
    return null;
  }
}
