import {legacy_createStore, combineReducers,applyMiddleware,compose } from "redux";
import { Datareducer } from "./Reducer";
import thunk from "redux-thunk";

const rootReducer =combineReducers({
    Data:Datareducer
})

const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE||compose

export const store=legacy_createStore(
    rootReducer, composeEnhancers(applyMiddleware(thunk))
)