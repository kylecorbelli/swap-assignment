import idInFocus from './index'
import {
  fetchDataRequestSucceeded,
  selectSimilarProduct,
} from 'redux/actions'

describe('products.idInFocus', () => {
  describe('FETCH_DATA_REQUEST_SUCCEEDED', () => {
    it('sets the product ID in focus', () => {
      const initialState = ''
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

  describe('SELECT_SIMILAR_PRODUCT', () => {
    it('sets the product ID in focus', () => {
      const initialState = 110
      const action = selectSimilarProduct({ productId: 211, productType: 'sofa'})
      const result = idInFocus(initialState, action)
      expect(result).toBe(211)
    })
  })
})
