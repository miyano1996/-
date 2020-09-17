import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk'
import looger from 'redux-logger'

const store = createStore(reducer,applyMiddleware(thunk,looger));

export default store