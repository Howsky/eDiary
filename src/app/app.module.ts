import { PipesModule } from './shared/pipes/index';
import { ContainersModule } from './shared/containers/index';
import { NavbarModule } from './core/navbar/navbar.module';
import { AuthModule } from './core/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { reducers } from './shared/store';
import { firebaseAPI } from './config/firebase.api';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ClickOutsideModule } from 'ng-click-outside';
import { MomentModule } from 'ngx-moment';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    AngularFireModule.initializeApp(firebaseAPI),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    AppRouting,
    AuthModule,
    NavbarModule,
    ContainersModule,
    ClickOutsideModule,
    MomentModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
