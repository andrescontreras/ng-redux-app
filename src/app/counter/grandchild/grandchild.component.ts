import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss'],
})
export class GrandchildComponent implements OnInit {
  counter: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  reset() {
    this.store.dispatch(reset());
    // this.counter = 0;
    // this.changeCounter.emit(this.counter);
  }
}
