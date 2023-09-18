import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { MediaEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageActions } from './state/admin-settings-page.actions';

@Component({
  selector: 'app-admin-settings-page-form',
  templateUrl: './admin-settings-page-form.component.html',
  styleUrls: ['./admin-settings-page-form.component.scss'],
})
export class AdminSettingsPageFormComponent implements OnDestroy{

  public form = this.fb.group({
    name: ['', [Validators.required]],    
    shortDescription: ['', [Validators.required]],
    content: ['', [Validators.required]],

    callText: ['', [Validators.required]], 
    callUrl: ['', [Validators.required]], 
    isLanding: [false],

    uploads: [[] as MediaEntity[]],

  });

  private destroy = new Subject<void>();
  
 constructor(private fb: FormBuilder, private store: Store){}

  public savePage() : void{
    this.store.dispatch(AdminSettingsPageActions.savePage({
      name: this.form.value.name,
      shortDescription: this.form.value.shortDescription,
      content: this.form.value.shortDescription,

      callText: this.form.value.shortDescription,
      callUrl: this.form.value.callUrl,
      isLanding: this.form.value.isLanding,

      uploads: this.form.value.uploads?.map(media => ({
        media
      })),
    }));
  }
 
  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}