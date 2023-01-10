import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent {
  @Input() counter: number = 0;
  @Output() onReset = new EventEmitter<number>();

  reset() {
    this.counter = 0;
    this.onReset.emit(0);
  }
}
