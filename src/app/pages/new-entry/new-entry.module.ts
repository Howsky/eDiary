import { ComponentsModule } from './../../shared/components/index';
import { ContainersModule } from '../../shared/containers';
import { NewEntryApiClient } from './new-entry.api-client';
import { NewEntryController } from './new-entry.controller';
import { NewEntryRouting } from './new-entry.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEntryComponent } from './new-entry.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewEntryComponent],
  imports: [CommonModule, NewEntryRouting, ContainersModule, ReactiveFormsModule, ComponentsModule],
  providers: [NewEntryController, NewEntryApiClient]
})
export class NewEntryModule {}
