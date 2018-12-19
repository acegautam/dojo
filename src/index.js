import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// import MediaCard from './MediaCard'
import App from './components/App'

// styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.querySelector('#root'))
