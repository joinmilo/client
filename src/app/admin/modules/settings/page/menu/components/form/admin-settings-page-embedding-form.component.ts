import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-settings-page-embedding-form',
  templateUrl: './admin-settings-page-embedding-form.component.html',
  styleUrls: ['./admin-settings-page-embedding-form.component.scss'],
})
export class AdminSettingsPageEmbeddingFormComponent {

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

}
