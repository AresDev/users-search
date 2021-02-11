import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './loader/loader.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UserItemComponent, LoaderComponent, UserDetailComponent],
  imports: [CommonModule, NgxPaginationModule, FontAwesomeModule],
  exports: [UserItemComponent, LoaderComponent, UserDetailComponent],
})
export class FeatureModule {}
