import { combineReducers, createStore } from "redux";
import { currencyReducer } from './currencyReducer';

const reducers = combineReducers({
    currency: currencyReducer,
});
export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers);