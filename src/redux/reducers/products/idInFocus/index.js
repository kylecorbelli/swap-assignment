import {
  FETCH_DATA_REQUEST_SUCCEEDED,
  SELECT_PRODUCT_IN_ROOM,
  SELECT_SIMILAR_PRODUCT,
} from 'redux/action-types'

const idInFocus = (state = '', action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST_SUCCEEDED:
      return action.payload.products.idInFocus
    case SELECT_PRODUCT_IN_ROOM:
    case SELECT_SIMILAR_PRODUCT:
      return action.payload.productId
    default:
      return state
  }
}

export default idInFocus
