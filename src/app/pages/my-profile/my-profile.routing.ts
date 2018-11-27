import { MyProfileResolver } from './my-profile.resolver';
import { MyProfileComponent } from './my-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: MyProfileComponent,
    resolve: { info: MyProfileResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRouting {}
