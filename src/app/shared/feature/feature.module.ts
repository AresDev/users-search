import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [UserItemComponent, LoaderComponent, UsersListComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [UserItemComponent, LoaderComponent],
})
export class FeatureModule {}
