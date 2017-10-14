import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './App.css'
import SiteHeader from 'components/SiteHeader'
import DesignConsole from 'containers/DesignConsole'

export default class App extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    this.props.fetchData()
  }

  render() {
    return (
      <div className={styles.container}>
        <SiteHeader />
        <div className={styles.main}>
          <DesignConsole />
        </div>
      </div>
    )
  }
}
