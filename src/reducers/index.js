import { combineReducers } from 'redux'
import listsReducer from "./listReducer"
import menuReducer from "./menuReducer"
import subMenusReducer from './subMenusReducer'

export default combineReducers({
   lists: listsReducer,
   menu: menuReducer,
   subMenu: subMenusReducer
})