import React, { Component } from 'react'
import classNames from 'classnames'

class Stars extends Component {
    constructor(props) {
        super(props)
        this.addStars = this.addStars.bind(this)
    }

    state = {
        stars: 0
    }

    addStars() {
        this.setState({
            stars: this.state.stars + 1
        })
    }

    render() {
        const starsClass = classNames('stars fas fa-star', { 'starred': this.state.stars > 0 })
        return (
            <div className='float-left'>
                <i className={starsClass} onClick={this.addStars} />
                <small className='stars-text text-muted'>{this.state.stars} stars</small>
            </div>
        )
    }
}

export default Stars