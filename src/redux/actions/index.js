import camelize from 'camelize'
import {
  FETCH_DATA_REQUEST_SENT,
  FETCH_DATA_REQUEST_FAILED,
  FETCH_DATA_REQUEST_SUCCEEDED,
  SET_PRODUCT_ID_IN_FOCUS,
} from 'redux/action-types'
import { getData } from 'services/data'

export const fetchDataRequestSent = () => ({
  type: FETCH_DATA_REQUEST_SENT,
})

export const fetchDataRequestFailed = () => ({
  type: FETCH_DATA_REQUEST_FAILED,
})

export const fetchDataRequestSucceeded = ({ room, products }) => ({
  type: FETCH_DATA_REQUEST_SUCCEEDED,
  payload: {
    room,
    products,
  },
})

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequestSent())
  try {
    const data = await getData()
    const {
      room_photo,
      room_type,
      products: rawProducts,
    } = data
    const room = {
      photo: room_photo,
      type: room_type,
    }
    const products = {
      idInFocus: rawProducts[0].id,
      idsSelected: rawProducts.reduce(
        (cumulativeIdsSelected, currentProduct) => ({
          ...cumulativeIdsSelected,
          [currentProduct.type]: cumulativeIdsSelected[currentProduct.type] || currentProduct.id,
        }),
        {},
      ),
      byId: rawProducts.reduce(
        (cumulativeProductsById, currentProduct) => ({
          ...cumulativeProductsById,
          [currentProduct.id]: camelize(currentProduct),
        }),
        {},
      ),
    }
    dispatch(fetchDataRequestSucceeded({ room, products }))
  } catch (error) {
    dispatch(fetchDataRequestFailed())
    throw error
  }
}

export const setProductIdInFocus = (productId) => ({
  type: SET_PRODUCT_ID_IN_FOCUS,
  payload: {
    productId,
  },
})
