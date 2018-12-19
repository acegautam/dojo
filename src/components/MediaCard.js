import React, { Component } from 'react'
import classNames from 'classnames'
import Stars from '../Stars'
import Fav from '../Fav'
import Sale from '../Sale'

import '../styles/media-card.scss'

class MediaCard extends Component {
    constructor(props) {
        super(props)
        this.paintCard = this.paintCard.bind(this)
    }

    state = {
        painted: false
    }

    paintCard(paint) {
        const willPaint = (paint === true)
        this.setState({ painted: willPaint })
    }

    render() {
        const { card } = this.props
        const bodyClass = classNames('card-body', {'painted': this.state.painted})
        return <div className='container'>
            <div className='media-card'>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Art Gallery</h1>
                    <p className="lead">A glimpse of my hand-painted art work using watercolors & archival ink</p>
                </div>
                <div className="card mb-4 shadow-sm text-center">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Secret Santa card</h4>
                    </div>
                    <div className={bodyClass}>
                        <Stars />
                        <Fav paintCard={this.paintCard} />
                        <h1 className="card-title pricing-card-title">{ card.title }</h1>
                        <h2>${card.price.toFixed(2)}</h2>
                        <img src={card.imageUrl} alt='watercolor' width='180' height='180' />
                        <p className="lead card-desc text-muted">
                            {card.body}
                        </p>
                        <Sale onSale={card.onSale} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default MediaCard