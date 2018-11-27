import { MyProfileEditResolver } from './my-profile-edit.resolver';
import { MyProfileEditComponent } from './my-profile-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', component: MyProfileEditComponent, resolve: {info: MyProfileEditResolver} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileEditRouting {}
