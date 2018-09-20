import { combineReducers } from 'redux'
import counter from './counter'
import property from './property'

export default combineReducers({
    counter,
    property,
})
