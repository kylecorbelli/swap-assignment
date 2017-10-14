import { connect } from 'react-redux'
import RoomView from 'components/RoomView'
import { selectedProducts } from 'redux/selectors'
import { selectProductInRoom } from 'redux/actions'

const mapStateToProps = (state) => ({
  products: selectedProducts(state),
})

export default connect(
  mapStateToProps,
  { selectProductInRoom },
)(RoomView)
