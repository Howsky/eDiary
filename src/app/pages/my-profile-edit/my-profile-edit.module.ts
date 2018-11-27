import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './../../shared/pipes/index';
import { ComponentsModule } from './../../shared/components/index';
import { MyProfileEditResolver } from './my-profile-edit.resolver';
import { ContainersModule } from '../../shared/containers';
import { MyProfileEditApiClient } from './my-profile-edit.api-client';
import { MyProfileEditController } from './my-profile-edit.controller';
import { MyProfileEditRouting } from './my-profile-edit.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileEditComponent } from './my-profile-edit.component';

@NgModule({
  declarations: [MyProfileEditComponent],
  imports: [CommonModule, MyProfileEditRouting, ContainersModule, ComponentsModule, PipesModule, ReactiveFormsModule],
  providers: [MyProfileEditController, MyProfileEditApiClient, MyProfileEditResolver]
})
export class MyProfileEditModule {}
