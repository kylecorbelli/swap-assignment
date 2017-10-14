import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './RoomView.css'

export default class RoomView extends Component {
  static propTypes = {
    roomPhoto: PropTypes.string.isRequired,
    setProductIdInFocus: PropTypes.func.isRequired,
  }

  setProductIdInFocus = (productId) => (event) => {
    this.props.setProductIdInFocus(productId)
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
              onClick={this.setProductIdInFocus(id)}
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
