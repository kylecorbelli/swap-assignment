import { FETCH_DATA_REQUEST_SUCCEEDED } from 'redux/action-types'

const idsSelected = (state = '', action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST_SUCCEEDED:
      return action.payload.products.idsSelected
    default:
      return state
  }
}

export default idsSelected
