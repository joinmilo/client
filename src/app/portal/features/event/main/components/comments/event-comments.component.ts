import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { eventId } from '../../constants/event.constant';
import { EventActions } from '../../state/event.actions';
import { selectEventsComments } from '../../state/event.selectors';

@Component({
  selector: 'app-event-comments',
  templateUrl: './event-comments.component.html',
  styleUrls: ['./event-comments.component.scss']
})
export class EventCommentsComponent implements OnInit{
  
  public eventComments = this.store.select(selectEventsComments);

    constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    ) { }
    
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const event = params.get(eventId) || '';
      this.store.dispatch(EventActions.getEventComments(event));
    });
  }
}