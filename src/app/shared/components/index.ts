import { ImgUploaderComponent } from './img-uploader/img-uploader.component';
import { PipesModule } from './../pipes/index';
import { MomentModule } from 'ngx-moment';
import { DiaryCardCreateComponent } from './diary-card-create/diary-card-create.component';
import { EntryCardCreateComponent } from './entry-card-create/entry-card-create.component';
import { EntryCardComponent } from './entry-card/entry-card.component';
import { DiaryCardComponent } from './diary-card/diary-card.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImgUploaderModule } from './img-uploader/img-uploader.module';
import { SelectModule } from './select/select.module';



export const COMPONENTS = [
  DiaryCardComponent,
  EntryCardComponent,
  DiaryCardCreateComponent,
  EntryCardCreateComponent,
];

export const COMPONENT_MODULES = [
  ImgUploaderModule,
  SelectModule,
];

@NgModule({
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule, MomentModule, PipesModule, ...COMPONENT_MODULES],
  declarations: COMPONENTS,
  exports: [...COMPONENTS, ...COMPONENT_MODULES]
})
export class ComponentsModule {}
