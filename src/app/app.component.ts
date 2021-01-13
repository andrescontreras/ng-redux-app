import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-redux-app';
  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe((counter) => {
      console.log(counter);
      this.counter = counter;
    });
  }

  increment() {
    this.store.dispatch(actions.increment());
  }

  decrement() {
    this.store.dispatch(actions.decrement());
  }
}
