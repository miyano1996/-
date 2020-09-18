import {combineReducers} from 'redux';
import addrsReducer from './addrs';

export default combineReducers({
    //key(数据切片名称):value(管理该数据切片的reducer)
    addrs:addrsReducer,
})