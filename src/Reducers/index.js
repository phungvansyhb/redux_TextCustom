import {combineReducers} from 'redux'
import color from './color-reducer'
import size from './size-reducer'
const allReducer = combineReducers( {
    color : color,
    size : size

})
export default allReducer;