import idsSelected from './index'
import {
  fetchDataRequestSucceeded,
  selectSimilarProduct,
} from 'redux/actions'

describe('products.idsSelected', () => {
  describe('FETCH_DATA_REQUEST_SUCCEEDED', () => {
    it('sets the product IDs selected', () => {
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

  describe('SELECT_SIMILAR_PRODUCT', () => {
    it('sets the product IDs selected', () => {
      const intialState = {
        sofa: 110,
        chair: 113,
      }
      const action = selectSimilarProduct({ productId: 211, productType: 'sofa' })
      const newState = idsSelected(intialState, action)
      const expectedNewState = {
        sofa: 211,
        chair: 113,
      }
      expect(newState).toEqual(expectedNewState)
    })
  })
})
