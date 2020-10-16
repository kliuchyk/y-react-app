export interface Action<T, P = undefined> {
  readonly type: T;
  readonly payload?: P;
};