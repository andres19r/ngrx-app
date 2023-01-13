import { createReducer, on } from '@ngrx/store';
import { decrement, divide, increment, multiply, reset } from './counter.actions';

export const initialState = 10;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, { num }) => state * num),
  on(divide, (state, { num }) => state / num),
  on(reset, (state) => 0)
);
