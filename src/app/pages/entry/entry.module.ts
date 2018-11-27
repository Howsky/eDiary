import { ContainersModule } from './../../shared/containers';
import { EntryApiClient } from './entry.api-client';
import { EntryController } from './entry.controller';
import { EntryRouting } from './entry.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { EntryResolver } from './entry.resolver';

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, EntryRouting, ContainersModule],
  providers: [EntryController, EntryApiClient, EntryResolver]
})
export class EntryModule {}
