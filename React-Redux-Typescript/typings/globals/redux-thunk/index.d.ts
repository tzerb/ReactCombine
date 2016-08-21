// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/redux-thunk/redux-thunk.d.ts
declare namespace ReduxThunk {
    export interface Thunk extends Redux.Middleware {}
    export interface ThunkInterface {
      <T>(dispatch: Redux.Dispatch, getState?: () => T): any;
    }
}

declare module "redux-thunk" {
    var thunk: ReduxThunk.Thunk;
    export default thunk;
}
