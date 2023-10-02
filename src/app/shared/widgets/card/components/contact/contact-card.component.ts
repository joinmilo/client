import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ContentData, ContentEntity } from 'src/app/core/typings/content-entity';
import { CardActionInput, CardActionOutput, CardElement } from '../../typings/card';
import { dataToElement } from '../../utils/card.utils';
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit, AfterViewInit {

  @Input()
  public actions?: CardActionInput[];

  @Input()
  public entity?: Maybe<ContentEntity>;

  @Input()
  public data?: Maybe<ContentData>;

  @Output()
  public actionClicked = new EventEmitter<CardActionOutput>();

  public element?: Maybe<CardElement>;

  public ngOnInit(): void {
    if (this.entity && this.data) {
      this.element = dataToElement(this.entity, this.data);
    }
  }

  public emit(action: CardActionInput): void {
    this.actionClicked.emit({ ...action, element: this.element as CardElement})
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const spanElement = this.elementRef.nativeElement.querySelector('.border-image');
    const spanWidth = spanElement.offsetWidth;

    const fontSize = spanWidth * 0.025 + 'em';
    this.renderer.setStyle(spanElement, 'font-size', fontSize);
  }

}
