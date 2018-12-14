import React, { Fragment } from 'react'

const Sale = ({ onSale }) =>
    <Fragment>
        {onSale ?
            (<button type="button" className="btn btn-lg btn-outline-primary">Buy</button>) : 
            (<button type="button" class="btn btn-secondary btn-lg" disabled>Sold Out</button>)
        }
    </Fragment>

export default Sale