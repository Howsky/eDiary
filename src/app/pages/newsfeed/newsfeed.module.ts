import { ContainersModule } from './../../shared/containers';
import { NewsfeedApiClient } from './newsfeed.api-client';
import { NewsfeedController } from './newsfeed.controller';
import { NewsfeedRouting } from './newsfeed.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';

@NgModule({
  declarations: [NewsfeedComponent],
  imports: [CommonModule, NewsfeedRouting, ContainersModule],
  providers: [NewsfeedController, NewsfeedApiClient]
})
export class NewsfeedModule {}
