import { connect } from 'react-redux'
import SimilarProducts from 'components/SimilarProducts'
import { productTypeInFocus, similarProducts } from 'redux/selectors'
import { selectSimilarProduct } from 'redux/actions'

const mapStateToProps = (state) => ({
  productIdInFocus: String(state.products.idInFocus),
  productTypeInFocus: productTypeInFocus(state),
  similarProducts: similarProducts(state),
})

export default connect(
  mapStateToProps,
  { selectSimilarProduct },
)(SimilarProducts)
