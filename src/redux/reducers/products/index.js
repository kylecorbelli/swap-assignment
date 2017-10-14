import { combineReducers } from 'redux'
import byId from './byId'
import idInFocus from './idInFocus'
import idsSelected from './idsSelected'

export default combineReducers({
  byId,
  idInFocus,
  idsSelected,
})
