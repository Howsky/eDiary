import { ContainersModule } from '../../shared/containers';
import { FollowedApiClient } from './followed.api-client';
import { FollowedController } from './followed.controller';
import { FollowedRouting } from './followed.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowedComponent } from './followed.component';

@NgModule({
  declarations: [FollowedComponent],
  imports: [CommonModule, FollowedRouting, ContainersModule],
  providers: [FollowedController, FollowedApiClient]
})
export class FollowedModule {}
