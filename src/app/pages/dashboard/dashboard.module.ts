import { ContainersModule } from './../../shared/containers';
import { DashboardApiClient } from './dashboard.api-client';
import { DashboardController } from './dashboard.controller';
import { DashboardRouting } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRouting, ContainersModule],
  providers: [DashboardController, DashboardApiClient]
})
export class DashboardModule {}
