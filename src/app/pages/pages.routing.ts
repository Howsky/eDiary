import { AuthGuard } from './../core/auth/auth.guard';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'newsfeed',
        loadChildren: './newsfeed/newsfeed.module#NewsfeedModule'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'my-diaries',
        loadChildren: './my-diaries/my-diaries.module#MyDiariesModule'
      },
      {
        path: 'followed',
        loadChildren: './followed/followed.module#FollowedModule'
      },
      {
        path: 'search-results',
        loadChildren:
          './search-results/search-results.module#SearchResultsModule'
      },
      {
        path: 'my-profile',
        loadChildren: './my-profile/my-profile.module#MyProfileModule'
      },
      {
        path: 'my-profile-edit',
        loadChildren:
          './my-profile-edit/my-profile-edit.module#MyProfileEditModule'
      },
      {
        path: 'app-settings',
        loadChildren:
          './app-settings/app-settings.module#AppSettingsModule'
      },
      {
        path: 'privacy-settings',
        loadChildren:
          './privacy-settings/privacy-settings.module#PrivacySettingsModule'
      },
      {
        path: 'new-entry',
        loadChildren: './new-entry/new-entry.module#NewEntryModule'
      },
      {
        path: 'new-diary',
        loadChildren: './new-diary/new-diary.module#NewDiaryModule'
      },
      { path: 'entry', loadChildren: './entry/entry.module#EntryModule' },
      { path: 'diary', loadChildren: './diary/diary.module#DiaryModule' },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting {}
