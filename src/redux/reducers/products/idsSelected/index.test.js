import idsSelected from './index'
import { fetchDataRequestSucceeded } from 'redux/actions'

describe('products.idsSelected', () => {
  describe('FETCH_DATA_REQUEST_SUCCEEDED', () => {
    it('sets the products by ID', () => {
      const initialState = {}
      const newProducts = {
        idInFocus: 101,
        idsSelected: {
          'sofa': 110,
        },
        byId: {
          101: {
            id: 101,
          },
        },
      }
      const action = fetchDataRequestSucceeded({ room: {}, products: newProducts })
      const newState = idsSelected(initialState, action)
      expect(newState).toEqual(newProducts.idsSelected)
    })
  })
})
