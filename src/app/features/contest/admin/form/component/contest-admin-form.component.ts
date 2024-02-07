import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Subject, filter, switchMap, takeUntil, tap } from 'rxjs';
import {
  ContactEntity,
  ContestEntity,
  ContestMediaEntity
} from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AppValidators } from 'src/app/core/validators/validators';
import { ContestAdminFormActions } from '../state/contest-admin-form.actions';
import {
  selectContest,
  selectContestTypes,
} from '../state/contest-admin-form.selectors';

@Component({
  selector: 'app-contest-admin-form',
  templateUrl: './contest-admin-form.component.html',
  styleUrls: ['./contest-admin-form.component.scss'],
})
export class ContestAdminFormComponent implements OnInit, OnDestroy {

  public contentForm = this.fb.group({
    id: [undefined as Maybe<string>],
    name: [undefined as Maybe<string>, [Validators.required]],
    typeId: [undefined as Maybe<string>],
    content: [undefined as Maybe<string>, [Validators.required]],
  });

  public uploadsForm = this.fb.group({
    uploads: [[] as Maybe<ContestMediaEntity>[], [Validators.required]],
  });

  public participationAndVoteForm = this.fb.group({
    voteEndDate: [undefined as Maybe<string>, [Validators.required]],
    participationEndDate: [undefined as Maybe<string>, [Validators.required]],
  });

  public shortDescriptionForm = this.fb.group({
    shortDescription: ['' as Maybe<string>],
  });

  public contactForm = this.fb.group({
    contact: [undefined as Maybe<ContactEntity>],
  });

  public additionalInfoForm = this.fb.group({
    maxVotes: [undefined as Maybe<number>, [AppValidators.minValue(1)]],
    maxParticipations: [undefined as Maybe<number>, [AppValidators.minValue(1)]],
    participationApproval: [undefined as Maybe<boolean>],    

    commentsAllowed: [undefined as Maybe<boolean>],
    metaDescription: [undefined as Maybe<string>],
  });

  public contest?: Maybe<ContestEntity>;

  private destroy = new Subject<void>();

  public types = this.store.select(selectContestTypes);

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store
  ) {}
  
  public ngOnInit(): void {
    this.store.dispatch(ContestAdminFormActions.getTypes());
    this.activatedRoute.params
      .pipe(
        filter((params) => !!params[slug]),
        tap((params) =>
          this.store.dispatch(ContestAdminFormActions.getContest(params[slug]))
        ),
        switchMap(() => this.store.select(selectContest)),
        filter((contest) => !!contest?.id),
        takeUntil(this.destroy),
      )
      .subscribe((contest) => {
        this.contest = contest;
        
        this.contentForm.patchValue({
          id: contest?.id,
          name: contest?.name,
          typeId: contest?.type?.id,
          content: contest?.content,
        });
        
        this.uploadsForm.patchValue({
          uploads: contest?.uploads
        });

        this.shortDescriptionForm.patchValue({
          shortDescription: contest?.shortDescription,
        });
        
        this.participationAndVoteForm.patchValue({
          participationEndDate: contest?.participationEndDate,
          voteEndDate: contest?.voteEndDate,
        });

        this.contactForm.patchValue({
          contact: contest?.contact,
        });

        this.additionalInfoForm.patchValue({
          maxParticipations: contest?.maxParticipations,
          maxVotes: contest?.maxVotes,  
          participationApproval: contest?.participationApproval,                  
          commentsAllowed: contest?.commentsAllowed,
          metaDescription: contest?.metaDescription,
        });
      });
  }
    
  public saved(): void {
    this.store.dispatch(
      ContestAdminFormActions.save({
        id: this.contentForm.value.id,
        name: this.contentForm.value.name,
        type:
          this.contentForm.value.typeId != null
            ? { id: this.contentForm.value.typeId }
            : null,
        content: this.contentForm.value.content,
        shortDescription: this.shortDescriptionForm.value.shortDescription,
        uploads: this.uploadsForm.value.uploads,
        
        voteEndDate: this.participationAndVoteForm.value.voteEndDate,
        participationEndDate: this.participationAndVoteForm.value.participationEndDate,

        maxVotes: this.additionalInfoForm.value.maxVotes || null,
        maxParticipations: this.additionalInfoForm.value.maxParticipations || null,
        participationApproval: this.additionalInfoForm.value.participationApproval,
        
        contact: this.contactForm.value.contact
          ? {
              id: this.contactForm.value.contact?.id,
              name: this.contactForm.value.contact.name,
              email: this.contactForm.value.contact.email,
              phone: this.contactForm.value.contact.phone,
              website: this.contactForm.value.contact.website,
              preferredContact: this.contactForm.value.contact.preferredContact ?? true,
            }
          : null,

        metaDescription: this.additionalInfoForm.value.metaDescription,
        commentsAllowed: this.additionalInfoForm.value.commentsAllowed,
      })
    );
  }
    
  public cancelled(): void {
    this.store.dispatch(ContestAdminFormActions.cancelled());
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
