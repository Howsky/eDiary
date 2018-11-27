import { ComponentsModule } from './../../shared/components/index';
import { PipesModule } from './../../shared/pipes/index';
import { MyProfileResolver } from './my-profile.resolver';
import { ContainersModule } from '../../shared/containers';
import { MyProfileApiClient } from './my-profile.api-client';
import { MyProfileController } from './my-profile.controller';
import { MyProfileRouting } from './my-profile.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [CommonModule, MyProfileRouting, ContainersModule, ComponentsModule, PipesModule],
  providers: [MyProfileController, MyProfileApiClient, MyProfileResolver]
})
export class MyProfileModule {}
