import React, { Fragment } from 'react'
import classNames from 'classnames'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'

class Fav extends React.Component {
    constructor(props) {
        super(props)
        this.toggleSwitch = this.toggleSwitch.bind(this)
    }
    state = {
        isFav: false
    }

    toggleSwitch()  {
        this.setState({
            isFav: !this.state.isFav
        })
    }

    render() {
        const favClass = classNames('fav float-right fab fa-gratipay', { 'faved': this.state.isFav })
        return (
            <Fragment>
                {/* <FontAwesomeIcon icon={['fab', 'heart']} /> */}
                {/* <FontAwesomeIcon icon={faHeart} /> */}
                <i className={favClass} onClick={this.toggleSwitch}></i>
                {/* <div>{(this.state.isFav) ? 'Yes' : 'No'}</div> */}
            </Fragment>
        )
    }
}

export default Fav
