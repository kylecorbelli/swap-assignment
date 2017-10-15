import {
  orderedProductsByIndex,
  selectedProducts,
  productTypeInFocus,
  similarProducts,
} from './index'

describe('selectors', () => {
  const state = {
    products: {
      byId: {
        1: {
          id: 1,
          index: 2,
          type: 'sofa',
        },
        2: {
          id: 2,
          index: 1,
          type: 'sofa',
        },
        3: {
          id: 3,
          index: 3,
          type: 'chair',
        },
      },
      idInFocus: 3,
      idsSelected: {
        sofa: 1,
        chair: 3,
      },
    },
  }

  describe('orderedProductsByIndex', () => {
    it('orders an array of products based on their "index"', () => {
      const products = Object.values(state.products.byId)
      const result = orderedProductsByIndex(products)
      const expectedResult = [
        { id: 2, index: 1, type: 'sofa' },
        { id: 1, index: 2, type: 'sofa' },
        { id: 3, index: 3, type: 'chair' },
      ]
      expect(result).toEqual(expectedResult)
    })
  })

  describe('selectedProducts', () => {
    it('extracts only the "selected" products', () => {
      const result = selectedProducts(state)
      const expectedResult = [
        { id: 1, index: 2, type: 'sofa' },
        { id: 3, index: 3, type: 'chair' },
      ]
      expect(result).toEqual(expectedResult)
    })
  })

  describe('productTypeInFocus', () => {
    it('extracts the product type in focus', () => {
      const result = productTypeInFocus(state)
      expect(result).toBe('chair')
    })
  })

  describe('similarProducts', () => {
    it('extracts all the products of the currently in-focus type, ordered by index', () => {
      const stateWithSofaInFocus = {
        ...state,
        products: {
          ...state.products,
          idInFocus: 1,
        },
      }
      const result = similarProducts(stateWithSofaInFocus)
      const expectedResult = [
        { id: 2, index: 1, type: 'sofa' },
        { id: 1, index: 2, type: 'sofa' },
      ]
      expect(result).toEqual(expectedResult)
    })
  })
})
