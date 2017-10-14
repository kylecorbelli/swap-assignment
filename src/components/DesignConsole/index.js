import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './DesignConsole.css'
import RoomView from 'components/RoomView'
import SimilarProducts from 'components/SimilarProducts'

// DELETE THIS:
const similarProducts = [
  {
    url: 'https://d32n2fbipjm5yj.cloudfront.net/RANCH-COUCH/preview/RANCH-COUCH_Couches_0792.png',
    price: 2000.00,
  },
  {
    url: 'https://d32n2fbipjm5yj.cloudfront.net/GWSOFA1/preview/GWSOFA1_Couches_0792.png',
    price: 199.99,
  },
  {
    price: 1200.00,
    url: 'https://d32n2fbipjm5yj.cloudfront.net/STYSOFA/preview/STYSOFA_Couches_0792.png',
  },
]
// ^ DELETE THIS


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
            <SimilarProducts similarProducts={similarProducts} />
          </div>
        </div>
      </div>
    )
  }
}
