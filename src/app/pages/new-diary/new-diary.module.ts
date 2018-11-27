import { ComponentsModule } from './../../shared/components/index';
import { ContainersModule } from '../../shared/containers';
import { NewDiaryApiClient } from './new-diary.api-client';
import { NewDiaryController } from './new-diary.controller';
import { NewDiaryRouting } from './new-diary.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDiaryComponent } from './new-diary.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewDiaryComponent],
  imports: [CommonModule, NewDiaryRouting, ContainersModule, ReactiveFormsModule, ComponentsModule],
  providers: [NewDiaryController, NewDiaryApiClient]
})
export class NewDiaryModule {}
