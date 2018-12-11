import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const min = 1
const dices = 2
const max = (dices || 1) * 6
const roll = Math.floor(Math.random()*(max - min + 1)) + min
const playAgain = (roll === 12)

const Greet = (props) => 
    <Fragment>    
        <h2>Hello { props.name } </h2>
        <p className='para'>You rolled a { roll }</p>
    </Fragment>

ReactDOM.render( <Greet name='Batman' />, document.querySelector('#root'))