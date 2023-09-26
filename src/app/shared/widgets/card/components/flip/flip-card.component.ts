import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, Renderer2, ViewChild } from '@angular/core';
import { Observable, Subject, isObservable, of } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { FlipCardOutput } from './../../typings/card';
@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnDestroy{
  
  @ViewChild('cardElement') cardElement?: ElementRef;

  flipCard(degrees: number) {
    this.renderer.setStyle(this.cardElement?.nativeElement, 'transform', `rotateY(${degrees}deg)`);
  }
  @Output()
  public elementClicked = new EventEmitter<FlipCardOutput>();

  private destroy = new Subject<void>();

  @Input()
  public elements?: string[] | Observable<string>[];

  @Input()
  public pictureUrl?: Maybe<string>;

  constructor(private renderer: Renderer2) { }

  emit(elementName: Observable<string>, index: number) {
    elementName.subscribe(element => this.elementClicked.emit({
      label: element,
      index: index
    }));
  }
  
  getElements(elements: string[] | Observable<string>[]): Observable<string>[] {
    return elements.map(element => isObservable(element) 
      ? element
      : of(element));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}