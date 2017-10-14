import {
  FETCH_DATA_REQUEST_SENT,
  FETCH_DATA_REQUEST_FAILED,
  FETCH_DATA_REQUEST_SUCCEEDED,
} from '../../action-types'

const fetchingData = (state = false, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST_SENT:
      return true
    case FETCH_DATA_REQUEST_FAILED:
    case FETCH_DATA_REQUEST_SUCCEEDED:
      return false
    default:
      return state
  }
}

export default fetchingData
