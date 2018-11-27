import { ComponentsModule } from './../shared/components/index';
import { ContainersModule } from './../shared/containers/index';
import { PagesRouting } from './pages.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRouting,
    ContainersModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
