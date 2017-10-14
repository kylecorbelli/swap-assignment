import room from './index'
import { fetchDataRequestSucceeded } from '../../actions'

describe('room', () => {
  describe('FETCH_DATA_REQUEST_SUCCEEDED', () => {
    it('updates the room data', () => {
      const initialState = {}
      const newRoom = {
        photo: 'http://www.somesite.com/photo/jpeg',
        type: 'kitchen',
      }
      const action = fetchDataRequestSucceeded({ room: newRoom, products: {} })
      const newState = room(initialState, action)
      expect(newState).toEqual(newRoom)
    })
  })
})
