import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './RoomView.css'

export default class RoomView extends Component {
  static propTypes = {
    roomPhoto: PropTypes.string.isRequired,
  }

  render = () => {
    const { roomPhoto } = this.props
    return (
      <div className={styles.container}>
        <img className={styles.room} src={roomPhoto} alt="" />
      </div>
    )
  }
}
