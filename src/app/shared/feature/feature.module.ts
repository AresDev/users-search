import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  declarations: [UserItemComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [UserItemComponent, LoaderComponent],
})
export class FeatureModule {}
