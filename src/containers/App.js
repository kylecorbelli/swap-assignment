import { connect } from 'react-redux'
import App from 'components/App'
import { fetchData } from 'redux/actions'

export default connect(
  null,
  { fetchData },
)(App);
