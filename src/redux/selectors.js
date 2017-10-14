export const byIdToArray = (byId) => Object.keys(byId).map(id => byId[id])

export const orderedProductsByLayer = (products) => {
  return products.slice().sort((a, b) => a.index - b.index)
}

export const selectedProducts = (state) => {
  const { byId, idsSelected } = state.products
  const selectedProductIds = byIdToArray(idsSelected)
  const selectedProducts = selectedProductIds.map(id => byId[id])
  return orderedProductsByLayer(selectedProducts)
}

export const productTypeInFocus = (state) => {
  const { idInFocus, byId } = state.products
  return idInFocus ? byId[idInFocus].type : ''
}

export const similarProducts = (state) => {
  const { byId } = state.products
  const typeInFocus = productTypeInFocus(state)
  const allProducts = byIdToArray(byId)
  const sortedProducts = orderedProductsByLayer(allProducts)
  return sortedProducts.filter(product => product.type === typeInFocus)
}
