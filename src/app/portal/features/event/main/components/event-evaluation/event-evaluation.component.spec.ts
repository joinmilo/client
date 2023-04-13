import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEvaluationComponent } from './event-evaluation.component';

describe('EventEvaluationComponent', () => {
  let component: EventEvaluationComponent;
  let fixture: ComponentFixture<EventEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
