import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SimilarProducts.css'
import ProductTile from 'components/ProductTile'
import { pluralize } from 'services/text'

export default class SimilarProducts extends Component {
  static propTypes = {
    similarProducts: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })),
    productIdInFocus: PropTypes.string,
    productTypeInFocus: PropTypes.string,
    selectSimilarProduct: PropTypes.func.isRequired,
  }

  render = () => {
    const {
      productIdInFocus,
      productTypeInFocus,
      selectSimilarProduct,
      similarProducts,
    } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.title}>{pluralize(productTypeInFocus)}</div>
        <div className={styles.tiles}>
          {similarProducts.map((product, index) => (
            <ProductTile
              product={product}
              key={index}
              productIdInFocus={productIdInFocus}
              selectSimilarProduct={selectSimilarProduct}
            />
          ))}
        </div>
      </div>
    )
  }
}
