import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() counter: number = 0;
  @Output() changeCounter = new EventEmitter<number>();

  multiply() {
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    this.changeCounter.emit(this.counter);
  }

  resetGrandChild(newCounter: number) {
    this.counter = newCounter;
    this.changeCounter.emit(this.counter);
  }
}
