import React from 'react'
import ErrorBound from './common/ErrorBound'
import Dashboard from './reddit/Dashboard'

import '../styles/app.scss'

const App = () => (
    <div className='rx-app'>
        <ErrorBound>
            <Dashboard q='reactjs' />
        </ErrorBound>
    </div>
)

export default App