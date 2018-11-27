import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Controller } from '../../shared/controller/base.controller';
import * as store from '../../shared/store';



@Injectable()
export class PrivacySettingsController extends Controller {
  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<store.ApplicationState>,
    private router: Router
  ) {
    super(appState$);
    this.registerEvents();
  }

  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private registerEvents(): void {
    // this.subscriptions.push();
  }
}
