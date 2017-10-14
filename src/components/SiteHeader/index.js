import React, { Component } from 'react'
import hutchLogo from './hutch-logo.svg'
import styles from './SiteHeader.css'

export default class SiteHeader extends Component {
  render = () => {
    return (
      <div className={styles.container}>
        <img src={hutchLogo} alt="hutch-logo" />
      </div>
    )
  }
}
