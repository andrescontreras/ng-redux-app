import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { divide, multiply } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  counter: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  multiply() {
    this.store.dispatch(multiply({ number: 10 }));
    // this.counter = this.counter * 2;
    // this.changeCounter.emit(this.counter);
  }

  divide() {
    this.store.dispatch(divide({ number: 10 }));
    // this.counter = this.counter / 2;
    // this.changeCounter.emit(this.counter);
  }
}
