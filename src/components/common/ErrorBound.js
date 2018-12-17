import React, { Component } from 'react'

import '../../styles/error.scss'

class ErrorBound extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo })
        // TODO: optionally, you can also log error to a logger service here
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className='error-box'>
                    <h2>Darn. Something went wrong.</h2>
                    <details>
                        {this.state.error && this.state.error.toString()}
                        {this.state.errorInfo &&
                            <p className='stack-info'>{this.state.errorInfo.componentStack}</p>
                        }
                    </details>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBound
