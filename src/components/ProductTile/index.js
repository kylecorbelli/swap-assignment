import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ProductTile.css'
import { prettyCurrency } from 'services/text'

export default class ProductTile extends Component {
  static propTypes = {
    product: PropTypes.shape({
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }

  render = () => {
    const { price, url } = this.props.product
    return (
      <div className={styles.container}>
        <div className={styles.photoWrapper}>
          <img className={styles.photo} src={url} alt="product" />
        </div>
        <p className={styles.price}>{prettyCurrency(price)}</p>
      </div>
    )
  }
}
