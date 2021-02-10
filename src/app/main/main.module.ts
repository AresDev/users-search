import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './dashboard/search/search.component';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsersListComponent } from './dashboard/users-list/users-list.component';
import { MainRoutingModule } from './main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DashboardComponent, SearchComponent, UsersListComponent],
  imports: [
    SharedModule,
    MainRoutingModule,
    NgxPaginationModule,
    FontAwesomeModule,
  ],
})
export class MainModule {}
