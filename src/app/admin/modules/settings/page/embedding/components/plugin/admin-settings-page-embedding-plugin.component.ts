import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe, PageEmbeddingEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageEmbeddingActions } from '../../state/admin-settings-page-embedding.actions';
import { selectPlugins } from '../../state/admin-settings-page-embedding.selectors';

@Component({
  selector: 'app-admin-settings-page-embedding-plugin',
  templateUrl: './admin-settings-page-embedding-plugin.component.html',
  styleUrls: ['./admin-settings-page-embedding-plugin.component.scss'],
})
export class AdminSettingsPageEmbeddingPluginComponent implements OnInit {

  @Input()
  public embedding?: PageEmbeddingEntity;

  @Output()
  public saved = new EventEmitter<PageEmbeddingEntity>();

  public plugins = this.store.select(selectPlugins);

  public form = this.fb.group({
    id: ['' as Maybe<string>],
    label: ['', [Validators.required]],
    pluginId: ['' as Maybe<string>, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.store.dispatch(AdminSettingsPageEmbeddingActions.getPlugins());
  }

  public ngOnInit(): void {
    this.form.patchValue({
      id: this.embedding?.id,
      label: this.embedding?.label,
      pluginId: this.embedding?.attributes?.[0]?.references?.[0]?.referenceId
    });
  }

  public save(): void {
    this.saved.emit({
      id: this.form.value.id,
      label: this.form.value.label,
      type: {
        id: this.embedding?.type?.id,
        code: this.embedding?.type?.code
      },
      attributes: [
        {
          references: [
            {
              referenceId: this.form.value.pluginId
            }
          ],
          type: {
            id: this.embedding?.attributes?.[0]?.type?.id
          }
        }
      ]
    })
  }

}