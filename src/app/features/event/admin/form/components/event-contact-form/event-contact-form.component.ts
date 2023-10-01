import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ContactEntity, Maybe, OrganisationEntity, UserContextEntity } from 'src/app/core/api/generated/schema';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { selectCategories, selectOrganisations } from '../../state/event-admin-form.selectors';

@Component({
  selector: 'app-event-contact-form',
  templateUrl: './event-contact-form.component.html',
  styleUrls: ['./event-contact-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: EventContactFormComponent
    }
  ]
})
export class EventContactFormComponent implements ControlValueAccessor,OnInit, OnDestroy{

  @Input()
  public selectedOrganisation?: Maybe<OrganisationEntity>;

  public form = this.fb.group({
    contactOption: [null as Maybe<string>],
    name: ['' as Maybe<string>],
    email: ['' as Maybe<string>],
    phone: ['' as Maybe<string>],
    website: ['' as Maybe<string>]
  });

  public get contactOptions(): string[] {
    if (this.selectedOrganisation) {
      return [
        'createContactWithOrganisationData',
        'createContactWithOwnData',
        'createNewContact'
      ];
    } else {
      return [
        'createContactWithOwnData',
        'createNewContact'
      ];
    }
  }

  private onChange?: (value?: Maybe<ContactEntity>) => void;
  private onTouched?: () => void;

  public categories = this.store.select(selectCategories);

  public userOrganisations = this.store.select(selectOrganisations);

  public currentUser?: Maybe<UserContextEntity>;

  private destroy = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.form.controls.contactOption.valueChanges.subscribe(selectedOption =>
       this.updateFormControls(selectedOption));

    this.form.valueChanges.pipe(takeUntil(this.destroy)).subscribe(()=>{
      this.onTouched?.();
      this.onChange?.({
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone,
        website: this.form.value.website
      });
    })
  }

  ngOnInit(): void {
    this.store.select(selectCurrentUser).pipe(takeUntil(this.destroy))
    .subscribe(user => this.currentUser = user);
  }

  private updateFormControls(selectedOption: Maybe<string>) {
    switch (selectedOption) {
      case 'createContactWithOrganisationData':
        this.form.patchValue({
          name: this.selectedOrganisation?.contact?.name,
          email: this.selectedOrganisation?.contact?.email,
          phone: this.selectedOrganisation?.contact?.phone,
          website: this.selectedOrganisation?.contact?.website
        })
        break;

      case 'createContactWithOwnData':
        this.form.patchValue({
          name: this.currentUser?.user?.lastName,
          email: this.currentUser?.user?.email,
          phone: this.currentUser?.user?.phone,
          website: '' as Maybe<string>
        })
        break;
      
      case 'createNewContact':
        this.form.patchValue({
          name: '',
          email: '',
          phone: '',
          website: ''
        })
        break;

        default:
    }
  }

  writeValue(contact: Maybe<ContactEntity>): void {
    this.form.patchValue({
      name: contact?.name,
      email: contact?.email,
      phone: contact?.phone,
      website: contact?.website
    })
  }

  public registerOnChange(onChange: (value?: Maybe<ContactEntity>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched?: () => void): void {
    this.onTouched = onTouched;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}

