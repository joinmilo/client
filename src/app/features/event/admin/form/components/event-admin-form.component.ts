import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, take, tap } from 'rxjs';
import { AddressEntity, ContactEntity, EventMediaEntity, Maybe, OrganisationEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { id, slug } from 'src/app/core/constants/queryparam.constants';
import { Period } from 'src/app/core/typings/period';
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
    address: [undefined as Maybe<AddressEntity>],
  }, {
    validators: [AppValidators.either('videoChatLink', 'address')]
  });

  public scheduleForm = this.fb.group({
    schedules: undefined as Maybe<Period[]>,
  });

  public uploadsForm = this.fb.group({
    uploads: undefined as Maybe<EventMediaEntity[]>,
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
      console.log(event);
      this.contentForm = this.fb.group({
        id: [event?.id],
        name: [event?.name, [Validators.required]],
        content: [event?.content, [Validators.required]],
      });

      this.scheduleForm = this.fb.group({
        schedules: this.scheduleForm.value.schedules
      });

      this.shortDescriptionForm = this.fb.group({
        shortDescription: [event?.shortDescription, [Validators.required]],
      });

      this.locationForm = this.fb.group({
        address: event?.address,
        videoChatLink: event?.videoChatLink
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
    console.log(this.locationForm.value.address);
    this.store.dispatch(EventAdminFormActions.save({
      id: this.contentForm.value.id,
      name: this.contentForm.value.name,
      content: this.contentForm.value.content,

      shortDescription: this.shortDescriptionForm.value.shortDescription,

      videoChatLink: this.locationForm.value.videoChatLink,
      address: this.locationForm.value.address,

      schedules: this.scheduleForm.value.schedules,

      uploads: this.uploadsForm.value.uploads,

      category: this.additionalInfoForm.value.categoryId != null
        ? { id: this.additionalInfoForm.value.categoryId }
        : null,
      entryFee: this.additionalInfoForm.value.entryFee,
      sponsored: this.additionalInfoForm.value.sponsored ?? false,
      metaDescription: this.additionalInfoForm.value.metaDescription,

      attendeeConfiguration: {
        approval: this.attendeeConfigForm.value.approval ?? false,
        maxAttendees: this.attendeeConfigForm.value.maxAttendees
      },

      organisation: this.contactAndOrganisationForm.value.organisation?.id != null
        ? { id: this.contactAndOrganisationForm.value.organisation?.id }
        : null,
      contact: this.contactAndOrganisationForm.value.contact
    }))
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}


