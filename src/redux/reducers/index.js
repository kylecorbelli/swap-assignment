import { combineReducers } from 'redux'
import fetchingData from './fetching-data'
import room from './room'
import products from './products'

const rootReducer = combineReducers({
  fetchingData,
  room,
  products,
})

export default rootReducer
