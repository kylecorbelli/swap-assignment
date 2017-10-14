import { FETCH_DATA_REQUEST_SUCCEEDED } from 'redux/action-types'

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST_SUCCEEDED:
      return action.payload.products.byId
    default:
      return state
  }
}

export default byId
