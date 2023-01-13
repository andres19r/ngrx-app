import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css'],
})
export class GrandchildComponent implements OnInit {
  counter: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  reset() {
    this.store.dispatch(reset());
  }
}
