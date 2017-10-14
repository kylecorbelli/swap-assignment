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
      type: PropTypes.string.isRequired,
    }).isRequired,
    productIdInFocus: PropTypes.string.isRequired,
    selectSimilarProduct: PropTypes.func.isRequired,
  }

  isFocusedProduct = () => {
    const {
      productIdInFocus,
      product: { id },
    } = this.props
    return productIdInFocus === String(id)
  }

  selectProduct = () => {
    const {
      product: { id, type },
      selectSimilarProduct,
    } = this.props
    selectSimilarProduct({ productId: id, productType: type })
  }

  render = () => {
    const { price,url } = this.props.product
    const isFocusedProduct = this.isFocusedProduct()
    return (
      <div
        className={classnames(styles.container, { [styles.focused]: isFocusedProduct })}
        onClick={this.selectProduct}
      >
        <div className={styles.photoWrapper}>
          <img className={styles.photo} src={url} alt="product" />
        </div>
        <p className={styles.price}>{prettyCurrency(price)}</p>
        <p className={classnames(styles.cta, { [styles.hidden]: !isFocusedProduct })}>View Product</p>
      </div>
    )
  }
}
