export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
  };
  
  export type Action<T> = {
    type: T;
  };
  
  export function createAction<T, P>(
    type: T,
    payload: P
  ): ActionWithPayload<T, P>;
  
  export function createAction<T>(
    type: T,
    payload: void
  ): Action<T>;
  
  export function createAction<T, P>(type: T, payload: P) {
    return { type, payload };
  }