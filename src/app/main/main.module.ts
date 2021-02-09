import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, MainRoutingModule],
})
export class MainModule {}
