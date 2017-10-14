import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './RoomView.css'

export default class RoomView extends Component {
  static propTypes = {
    roomPhoto: PropTypes.string.isRequired,
    selectProductInRoom: PropTypes.func.isRequired,
  }

  selectProductInRoom = (productId) => (event) => {
    this.props.selectProductInRoom(productId)
  }

  render = () => {
    const {
      products,
      roomPhoto,
    } = this.props
    return (
      <div className={styles.container}>
        <img className={styles.room} src={roomPhoto} alt="" />
        {
          products.map(({ height, id, left, top, url, width }) => (
            <img
              alt=""
              className={styles.product}
              key={id}
              onClick={this.selectProductInRoom(id)}
              src={url}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                height: `${height}%`,
                width: `${width}%`,
              }}
            />
          ))
        }
      </div>
    )
  }
}
