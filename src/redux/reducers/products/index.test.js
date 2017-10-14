import { fetchDataRequestSucceeded } from 'redux/actions'
import products from 'redux/reducers/products/index'

describe('products', () => {
  describe('FETCH_DATA_REQUEST_SUCCEEDED', () => {
    it('updates the products data', () => {
      const initialState = {}
      const newProducts = {
        idSelected: 101,
        byId: {
          101: {
            id: 101,
          },
        },
      }
      const action = fetchDataRequestSucceeded({ room: {}, products: newProducts })
      const newState = products(initialState, action)
      expect(newState).toEqual(newProducts)
    })
  })
})
