import { createStore, combineReducers } from 'redux';

import numReducer from "./reducers/number"

const reducers = combineReducers({
    numbers:numReducer
    },
);

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;