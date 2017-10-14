import { connect } from 'react-redux'
import SimilarProducts from 'components/SimilarProducts'
import { productTypeInFocus, similarProducts } from 'redux/selectors'

const mapStateToProps = (state) => ({
  productTypeInFocus: productTypeInFocus(state),
  similarProducts: similarProducts(state),
})

export default connect(
  mapStateToProps,
)(SimilarProducts)
