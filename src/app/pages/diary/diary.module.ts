import { ComponentsModule } from './../../shared/components/index';
import { PipesModule } from './../../shared/pipes/index';
import { ContainersModule } from '../../shared/containers';
import { DiaryApiClient } from './diary.api-client';
import { DiaryController } from './diary.controller';
import { DiaryRouting } from './diary.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary.component';

@NgModule({
  declarations: [DiaryComponent],
  imports: [CommonModule, DiaryRouting, ContainersModule, PipesModule, ComponentsModule],
  providers: [DiaryController, DiaryApiClient]
})
export class DiaryModule {}
