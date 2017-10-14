import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './ProductTile.css'
import { prettyCurrency } from 'services/text'

export default class ProductTile extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    productIdInFocus: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)
    const {
      productIdInFocus,
      product: { id },
    } = props
    this.state = {
      isFocusedProduct: productIdInFocus === String(id)
    }
  }

  render = () => {
    const { isFocusedProduct } = this.state
    const { price, url } = this.props.product
    return (
      <div className={classnames(styles.container, { [styles.focused]: isFocusedProduct })}>
        <div className={styles.photoWrapper}>
          <img className={styles.photo} src={url} alt="product" />
        </div>
        <p className={styles.price}>{prettyCurrency(price)}</p>
        <p className={classnames(styles.cta, { [styles.hidden]: !isFocusedProduct })}>View Product</p>
      </div>
    )
  }
}
