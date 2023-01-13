import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  counter: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  multiply() {
    this.store.dispatch(actions.multiply({ num: 3 }));
  }

  divide() {
    this.store.dispatch(actions.divide({ num: 2 }));
  }
}
