import {
  FETCH_DATA_REQUEST_SUCCEEDED,
  SET_PRODUCT_ID_IN_FOCUS,
} from 'redux/action-types'

const idInFocus = (state = '', action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST_SUCCEEDED:
      return action.payload.products.idInFocus
    case SET_PRODUCT_ID_IN_FOCUS:
      return action.payload.productId
    default:
      return state
  }
}

export default idInFocus
