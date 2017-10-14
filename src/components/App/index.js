import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import styles from './App.css'
import SiteHeader from 'components/SiteHeader'

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
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
