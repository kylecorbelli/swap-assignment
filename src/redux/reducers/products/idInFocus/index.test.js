import idInFocus from './index'
import { fetchDataRequestSucceeded } from 'redux/actions'

describe('products.idInFocus', () => {
  describe('FETCH_DATA_REQUEST_SUCCEEDED', () => {
    it('sets the products by ID', () => {
      const initialState = {}
      const newProducts = {
        idInFocus: 101,
        byId: {
          101: {
            id: 101,
          },
        },
      }
      const action = fetchDataRequestSucceeded({ room: {}, products: newProducts })
      const newState = idInFocus(initialState, action)
      expect(newState).toEqual(newProducts.idInFocus)
    })
  })
})
