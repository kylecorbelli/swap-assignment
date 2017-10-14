import { FETCH_DATA_REQUEST_SUCCEEDED } from 'redux/action-types'

const room = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST_SUCCEEDED:
      return action.payload.room
    default:
      return state
  }
}

export default room
