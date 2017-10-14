import { connect } from 'react-redux'
import RoomView from 'components/RoomView'
import { selectedProducts } from 'redux/selectors'
import { setProductIdInFocus } from 'redux/actions'

const mapStateToProps = (state) => ({
  products: selectedProducts(state),
})

export default connect(
  mapStateToProps,
  { setProductIdInFocus },
)(RoomView)
