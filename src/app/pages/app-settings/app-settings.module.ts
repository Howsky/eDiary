import { ContainersModule } from '../../shared/containers';
import { AppSettingsApiClient } from './app-settings.api-client';
import { AppSettingsController } from './app-settings.controller';
import { AppSettingsRouting } from './app-settings.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsComponent } from './app-settings.component';

@NgModule({
  declarations: [AppSettingsComponent],
  imports: [CommonModule, AppSettingsRouting, ContainersModule],
  providers: [AppSettingsController, AppSettingsApiClient]
})
export class AppSettingsModule {}
