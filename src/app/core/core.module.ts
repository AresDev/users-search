import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStoreModule } from './store/user/user.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserStoreModule],
})
export class CoreModule {}
