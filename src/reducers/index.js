import { combineReducers } from 'redux'
import listsReducer from "./listReducer"
import menuReducer from "./menuReducer"

export default combineReducers({
   lists: listsReducer,
   menu: menuReducer
})