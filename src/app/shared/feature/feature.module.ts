import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './loader/loader.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [UserItemComponent, LoaderComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [UserItemComponent, LoaderComponent],
})
export class FeatureModule {}
