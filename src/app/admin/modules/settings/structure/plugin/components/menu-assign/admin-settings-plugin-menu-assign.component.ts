import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Maybe, MenuItemEntity, PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginActions } from '../../state/admin-settings-plugin.actions';
import { selectMenuItems } from '../../state/admin-settings-plugin.selectors';


@Component({
  selector: 'app-admin-settings-plugin-menu-assign',
  templateUrl: './admin-settings-plugin-menu-assign.component.html',
  styleUrls: ['./admin-settings-plugin-menu-assign.component.scss'],
})
export class AdminSettingsPluginMenuAssignComponent {
  
  public menuItems = this.store.select(selectMenuItems)

  public form = this.fb.group({
    menu: [undefined as Maybe<MenuItemEntity>],
  });
  
  constructor (
    @Inject(MAT_DIALOG_DATA) public plugin: PluginEntity, 
    private fb: FormBuilder,
    private store: Store,
    ) 
    { 
      this.store.dispatch(AdminSettingsPluginActions.getMenuItems());
    }

  public saved(): void {
    this.store.dispatch(AdminSettingsPluginActions.savePluginMenuItem(
      {
        id: this.form.value.menu?.id
      },     
      this.plugin.menuItems?.[0],
      {
        id: this.plugin.id,
        active: this.plugin.active,
      }
    ))
  }
}