import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() counter: number;
  @Output() changeCounter = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  multiply() {
    this.counter = this.counter * 2;
    this.changeCounter.emit(this.counter);
  }

  divide() {
    this.counter = this.counter / 2;
    this.changeCounter.emit(this.counter);
  }

  reset(e) {
    this.changeCounter.emit(e);
  }
}
