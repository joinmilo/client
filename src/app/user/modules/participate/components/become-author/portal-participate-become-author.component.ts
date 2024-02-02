import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PortalParticipateActions } from '../../state/portal-participate.actions';

@Component({
  selector: 'app-portal-participate-become-author',
  templateUrl: './portal-participate-become-author.component.html',
  styleUrls: ['./portal-participate-become-author.component.scss'],
})
export class PortalParticipateBecomeAuthorComponent {

  public form = this.fb.group({
    author: [true],
    content: ['', [Validators.required]],
  });

  constructor(  
    private store: Store,
    private fb: FormBuilder) { }

  public save(): void {
    this.store.dispatch(PortalParticipateActions.saveAuthorApplication({
      accepted: false,
      content: this.form.value.content,
      privilege: { code: 'articles_manage' },
    }));
  }
}
