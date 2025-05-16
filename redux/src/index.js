import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Field from './fields';
import fieldReducer from './fieldReducer';
import counterReducer from './counterReducer';
import Counter from './counter';

const reducers = combineReducers({
    field: fieldReducer,
    counter: counterReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
        <Counter/>
    </Provider>,
    document.getElementById('root')
);
