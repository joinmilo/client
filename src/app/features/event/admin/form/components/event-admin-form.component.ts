import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, filter, switchMap, take, takeUntil, tap } from 'rxjs';
import { AddressEntity, ContactEntity, EventMediaEntity, Maybe, OrganisationEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { Period } from 'src/app/core/typings/period';
import { AppValidators } from 'src/app/core/validators/validators';
import { EventAdminFormActions } from '../state/event-admin-form.actions';
import { selectCategories, selectEvent, selectOrganisations, selectTargetGroups } from '../state/event-admin-form.selectors';


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
  }, 
  {
    validators: [AppValidators.either('videoChatLink', 'address')]
  });

  public scheduleForm = this.fb.group({
    schedules: undefined as Maybe<Period[]>,
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as Maybe<EventMediaEntity>[], [Validators.required]],
  });

  public additionalInfoForm = this.fb.group({
    categoryId: [undefined as Maybe<string>],
    targetGroups: this.fb.control(null as Maybe<string[]>),
    commentsAllowed: [undefined as Maybe<boolean>],
    entryFee: [undefined as Maybe<number>],
    metaDescription: [undefined as Maybe<string>],
  });

  public contactAndOrganisationForm = this.fb.group({
    organisation: [undefined as Maybe<OrganisationEntity>],
    contact: [undefined as Maybe<ContactEntity>]
  });

  public attendeeConfigForm = this.fb.group({
    id: [undefined as Maybe<string>],
    approval: [undefined as Maybe<boolean>],
    maxAttendees: [undefined as Maybe<number>]
  });

  public categories = this.store.select(selectCategories);

  public targetGroups = this.store.select(selectTargetGroups);

  public userOrganisations = this.store.select(selectOrganisations);

  public currentUser?: Maybe<UserContextEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store,
  ) {}

  public ngOnInit(): void {
    this.locationChange();
    
    this.init();

    this.store.dispatch(EventAdminFormActions.getCategories());
    this.store.dispatch(EventAdminFormActions.getTargetGroups());
  }

  private init(): void {
    this.activatedRoute.params.pipe(
      filter(params => !!params[slug]),
      tap(params => this.store.dispatch(EventAdminFormActions.getEvent(params[slug]))),
      switchMap(() => this.store.select(selectEvent)),
      filter(event => !!event?.id),
      take(1)
    ).subscribe(event => {

      this.contentForm.patchValue({
        id: event?.id,
        name: event?.name,
        content: event?.content, 
      }, { emitEvent: false});
    
      this.scheduleForm.patchValue({
        schedules: event?.schedules?.map(schedule => ({
          startDate: schedule?.startDate,
          endDate: schedule?.endDate,
        }) as Period)
      }, { emitEvent: false })

      this.shortDescriptionForm.patchValue({
        shortDescription: event?.shortDescription,
      });

      this.locationForm.patchValue({
        address: event?.address,
        videoChatLink: event?.videoChatLink
      });

      this.additionalInfoForm.patchValue({
        commentsAllowed: event?.commentsAllowed,
        categoryId: event?.category?.id,
        entryFee: event?.entryFee,
        metaDescription: event?.metaDescription,
        targetGroups: event?.targetGroups?.map(targetGroup => targetGroup?.id as string) as string[],
      });

      this.uploadsForm.patchValue({
        uploads: event?.uploads
      });

      this.contactAndOrganisationForm.patchValue({
        organisation: event?.organisation,
        contact: event?.contact
      });

      this.attendeeConfigForm.patchValue({
        id: event?.attendeeConfiguration?.id,
        approval: event?.attendeeConfiguration?.approval,
        maxAttendees: event?.attendeeConfiguration?.maxAttendees
      });
    });
  }

  private locationChange(): void {
    this.locationForm.controls.address.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        if (this.locationForm.value.address) {
          this.locationForm.controls.videoChatLink.setValue(null);
          this.locationForm.controls.videoChatLink.disable();
        } else {
          this.locationForm.controls.videoChatLink.enable();
        }
      });
  }

  public cancelled(): void {
    this.store.dispatch(EventAdminFormActions.cancelled());
  }

  public saved(): void {
    this.store.dispatch(EventAdminFormActions.save({
      id: this.contentForm.value.id,
      name: this.contentForm.value.name,
      content: this.contentForm.value.content,

      shortDescription: this.shortDescriptionForm.value.shortDescription,

      videoChatLink: this.locationForm.value.videoChatLink,
      address: this.locationForm.value.address,

      schedules: this.scheduleForm.value.schedules?.map(schedule => ({
        startDate: schedule.startDate,
        endDate: schedule.endDate
      })),

      category: this.additionalInfoForm.value.categoryId != null
        ? { id: this.additionalInfoForm.value.categoryId }
        : null,
      entryFee: this.additionalInfoForm.value.entryFee,
      metaDescription: this.additionalInfoForm.value.metaDescription,
      commentsAllowed: this.additionalInfoForm.value.commentsAllowed,
      targetGroups: this.additionalInfoForm.value.targetGroups?.map(id => ({
        id
      })),

      attendeeConfiguration: {
        id: this.attendeeConfigForm.value.id,
        approval: this.attendeeConfigForm.value.approval ?? false,
        maxAttendees: this.attendeeConfigForm.value.maxAttendees
      },

      organisation: this.contactAndOrganisationForm.value.organisation?.id != null
        ? { id: this.contactAndOrganisationForm.value.organisation?.id }
        : null,

      contact: this.contactAndOrganisationForm.value.contact
        ? { 
          id: this.contactAndOrganisationForm.value.contact?.id,
          name: this.contactAndOrganisationForm.value.contact.name,
          email: this.contactAndOrganisationForm.value.contact.email,
          phone: this.contactAndOrganisationForm.value.contact.phone,
          website: this.contactAndOrganisationForm.value.contact.website,
          preferredContact: this.contactAndOrganisationForm.value.contact.preferredContact ?? true
         }
        : null,

      uploads: this.uploadsForm.value.uploads
    }))
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}


