import { FETCH_DATA_REQUEST_SUCCEEDED } from 'redux/action-types'

const products = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST_SUCCEEDED:
      return action.payload.products
    default:
      return state
  }
}

export default products
