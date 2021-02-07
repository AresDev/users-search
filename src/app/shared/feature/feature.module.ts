import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UserItemComponent, UsersListComponent],
  imports: [CommonModule],
  exports: [UsersListComponent],
})
export class FeatureModule {}
