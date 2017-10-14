import { connect } from 'react-redux'
import DesignConsole from 'components/DesignConsole'
import { snakeCaseToWords } from 'services/text'

const mapStateToProps = (state) => ({
  roomPhoto: state.room.photo,
  roomType: snakeCaseToWords(state.room.type),
})

export default connect(
  mapStateToProps,
)(DesignConsole)
