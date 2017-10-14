import {
  FETCH_DATA_REQUEST_SUCCEEDED,
  SELECT_SIMILAR_PRODUCT,
} from 'redux/action-types'

const idsSelected = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST_SUCCEEDED:
      return action.payload.products.idsSelected
    case SELECT_SIMILAR_PRODUCT:
      const { productId, productType } = action.payload
      return {
        ...state,
        [productType]: productId,
      }
    default:
      return state
  }
}

export default idsSelected
