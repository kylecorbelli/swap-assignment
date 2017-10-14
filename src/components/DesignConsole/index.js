import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './DesignConsole.css'
import RoomView from 'containers/RoomView'
import SimilarProducts from 'containers/SimilarProducts'

export default class DesignConsole extends Component {
  static propTypes = {
    roomPhoto: PropTypes.string.isRequired,
    roomType: PropTypes.string.isRequired,
  }

  render = () => {
    const { roomPhoto, roomType } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.header}>{roomType}</div>
        <div className={styles.content}>
          <RoomView roomPhoto={roomPhoto} />
          <div className={styles.sidebar}>
            <SimilarProducts />
          </div>
        </div>
      </div>
    )
  }
}
