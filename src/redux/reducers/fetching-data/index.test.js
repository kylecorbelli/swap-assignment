import fetchingData from 'redux/reducers/fetching-data'
import {
  fetchDataRequestSent,
  fetchDataRequestFailed,
  fetchDataRequestSucceeded,
} from 'redux/actions'
import { expectFetchingToChangeTo } from 'services/test-helpers'

describe('fetchingData', () => {
  describe('FETCH_DATA_REQUEST_SENT', () => {
    it('indicates data is being fetched', () => {
      expectFetchingToChangeTo(true, fetchDataRequestSent, fetchingData)
    })
  })

  describe('FETCH_DATA_REQUEST_FAILED', () => {
    it('indicates data is no longer being fetched', () => {
      expectFetchingToChangeTo(false, fetchDataRequestFailed, fetchingData)
    })
  })

  describe('FETCH_DATA_REQUEST_SUCCEEDED', () => {
    it('indicates data is no longer being fetched', () => {
      const initialState = true
      const action = fetchDataRequestSucceeded({ room: {}, products: {} })
      const newState = fetchingData(initialState, action)
      expect(newState).toBe(false)
    })
  })
})
