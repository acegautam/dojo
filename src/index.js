import React from 'react'
import ReactDOM from 'react-dom'
import MediaCard from './MediaCard'

// styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

const attrs = {
    title: 'Merry Xmas',
    body: 'Quick 30 min simple hand drawn watercolor card for a colleague at the "Secret Santa" event at work.',
    imageUrl: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/48207413_10156871103574771_3268576240897884160_n.jpg?_nc_cat=109&_nc_ht=scontent-sjc3-1.xx&oh=db0a893b59eb6a05ba3ed2c62204456e&oe=5CA4E35E',
    price: 30,
    onSale: true
}
ReactDOM.render(
    <MediaCard card={attrs} />,
    document.querySelector('#root')
)