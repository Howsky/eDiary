import { ComponentsModule } from './../../shared/components/index';
import { ContainersModule } from '../../shared/containers';
import { MyDiariesApiClient } from './my-diaries.api-client';
import { MyDiariesController } from './my-diaries.controller';
import { MyDiariesRouting } from './my-diaries.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDiariesComponent } from './my-diaries.component';

@NgModule({
  declarations: [MyDiariesComponent],
  imports: [CommonModule, MyDiariesRouting, ContainersModule, ComponentsModule],
  providers: [MyDiariesController, MyDiariesApiClient],
})
export class MyDiariesModule {}
