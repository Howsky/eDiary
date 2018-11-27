import { EntryComponent } from './entry.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EntryResolver } from './entry.resolver';

export const routes: Routes = [
  { path: ':uid/:eid', component: EntryComponent, resolve: { info: EntryResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRouting {}
