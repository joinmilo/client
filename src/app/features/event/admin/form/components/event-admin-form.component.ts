import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, take, tap } from 'rxjs';
import { AddressEntity, ContactEntity, EventMediaEntity, EventScheduleEntity, Maybe, OrganisationEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { id, slug } from 'src/app/core/constants/queryparam.constants';
import { AppValidators } from 'src/app/core/validators/validators';
import { EventAdminFormActions } from '../state/event-admin-form.actions';
import { selectCategories, selectEvent, selectOrganisations } from '../state/event-admin-form.selectors';


@Component({
  selector: 'app-event-admin-form',
  templateUrl: './event-admin-form.component.html',
  styleUrls: ['./event-admin-form.component.scss']
})
export class EventAdminFormComponent implements OnInit, OnDestroy {

  public contentForm = this.fb.group({
    id: [undefined as Maybe<string>],
    name: [undefined as Maybe<string>, [Validators.required]],
    content: [undefined as Maybe<string>, [Validators.required]],
  });

  public shortDescriptionForm = this.fb.group({
    shortDescription: ['' as Maybe<string>],
  });

  public locationForm = this.fb.group({
    videoChatLink: [undefined as Maybe<string>],
    address: [{} as Maybe<AddressEntity>],
  }, {
    validators: [AppValidators.either('videoChatLink', 'address')]
  });

  public scheduleForm = this.fb.group({
    schedules: [undefined as Maybe<EventScheduleEntity[]>],
  });

  public uploadsForm = this.fb.group({
    uploads: [undefined as Maybe<EventMediaEntity[]>],
  });

  public additionalInfoForm = this.fb.group({
    categoryId: [undefined as Maybe<string>],
    entryFee: [undefined as Maybe<number>],
    sponsored: [undefined as Maybe<boolean>],
    metaDescription: [undefined as Maybe<string>],
  });

  public contactAndOrganisationForm = this.fb.group({
    organisation: [undefined as Maybe<OrganisationEntity>],
    contact: [undefined as Maybe<ContactEntity>]
  });

  public attendeeConfigForm = this.fb.group({
    approval: [undefined as Maybe<boolean>],
    maxAttendees: [undefined as Maybe<number>]
  });

  public categories = this.store.select(selectCategories);

  public userOrganisations = this.store.select(selectOrganisations);

  public currentUser?: Maybe<UserContextEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(EventAdminFormActions.getCategories());
    this.activatedRoute.params.pipe(
      filter(params => !!params[slug]),
      tap(params => this.store.dispatch(EventAdminFormActions.getEvent(params[id]))),
      switchMap(() => this.store.select(selectEvent)),
      filter(event => !!event),
      take(1)
    ).subscribe(event => {
      this.contentForm = this.fb.group({
        id: [event?.id],
        name: [event?.name, [Validators.required]],
        content: [event?.content, [Validators.required]],
      });

      this.scheduleForm = this.fb.group({
        schedules: [event?.schedules as Maybe<EventScheduleEntity[]>],
      });

      this.shortDescriptionForm = this.fb.group({
        shortDescription: [event?.shortDescription, [Validators.required]],
      });

      this.additionalInfoForm = this.fb.group({
        categoryId: [event?.category?.id],
        entryFee: [event?.entryFee],
        sponsored: [event?.sponsored],
        metaDescription: [event?.metaDescription],
      });

      this.contactAndOrganisationForm = this.fb.group({
        organisation: [event?.organisation],
        contact: [event?.contact]
      });

      this.attendeeConfigForm = this.fb.group({
        approval: [event?.attendeeConfiguration?.approval],
        maxAttendees: [event?.attendeeConfiguration?.maxAttendees]
      });
    }
    );
  }

  public cancelled(): void {
    this.store.dispatch(EventAdminFormActions.cancelled());
  }

  public saved(): void {
    console.log(this.contactAndOrganisationForm.value.contact);
    console.log(this.locationForm.value.address);
    //TODO: Save
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}


