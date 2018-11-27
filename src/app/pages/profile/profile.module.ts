import { ContainersModule } from '../../shared/containers';
import { ProfileApiClient } from './profile.api-client';
import { ProfileController } from './profile.controller';
import { ProfileRouting } from './profile.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRouting, ContainersModule],
  providers: [ProfileController, ProfileApiClient]
})
export class ProfileModule {}
