import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './SimilarProducts.css'
import ProductTile from 'components/ProductTile'

export default class SimilarProducts extends Component {
  static propTypes = {
    similarProducts: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })),
  }

  render = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Sofas</div>
        <div className={styles.tiles}>
          {this.props.similarProducts.map(product => <ProductTile product={product} />)}
        </div>
      </div>
    )
  }
}
