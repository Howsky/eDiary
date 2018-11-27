import { ContainersModule } from '../../shared/containers';
import { PrivacySettingsApiClient } from './privacy-settings.api-client';
import { PrivacySettingsController } from './privacy-settings.controller';
import { PrivacySettingsRouting } from './privacy-settings.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacySettingsComponent } from './privacy-settings.component';

@NgModule({
  declarations: [PrivacySettingsComponent],
  imports: [CommonModule, PrivacySettingsRouting, ContainersModule],
  providers: [PrivacySettingsController, PrivacySettingsApiClient]
})
export class PrivacySettingsModule {}
