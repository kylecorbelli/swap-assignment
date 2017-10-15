export const orderedProductsByIndex = (products) => {
  return products.slice().sort((a, b) => a.index - b.index)
}

export const selectedProducts = (state) => {
  const { byId, idsSelected } = state.products
  const selectedProductIds = Object.values(idsSelected)
  const selectedProducts = selectedProductIds.map(id => byId[id])
  return orderedProductsByIndex(selectedProducts)
}

export const productTypeInFocus = (state) => {
  const { idInFocus, byId } = state.products
  return idInFocus ? byId[idInFocus].type : ''
}

export const similarProducts = (state) => {
  const { byId } = state.products
  const typeInFocus = productTypeInFocus(state)
  const allProducts = Object.values(byId)
  const sortedProducts = orderedProductsByIndex(allProducts)
  return sortedProducts.filter(product => product.type === typeInFocus)
}
