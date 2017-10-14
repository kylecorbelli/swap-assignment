import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import styles from './App.css';
import { fetchData } from 'redux/actions'

class App extends Component {
  componentDidMount = () => {
    this.props.fetchData()
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchData },
)(App);
