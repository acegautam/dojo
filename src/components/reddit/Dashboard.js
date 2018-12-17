import React, { Component } from 'react'
import axios from 'axios'
import PostsList from './PostsList'

import '../../styles/reddit-dash.scss'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    async componentDidMount() {
        const redditBaseUrl = 'https://www.reddit.com/r'
        const postsJson = await axios.get(`${redditBaseUrl}/${this.props.q}.json`)
        const posts = postsJson.data.data.children.map(post => post.data).filter(post => post.selftext !== '')
        this.setState({ posts })
    }

    render() {
        return (
            <div className='container dashboard'>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Reddit Dashboard</h1>
                < p className = "lead" >A simple lite clone of Reddit displaing subreddit for React JS.</p>
                </div>
                <div>
                    <p>"{this.props.q}" related posts [{this.state.posts.length}]</p>
                </div>
                <PostsList posts={ this.state.posts } />
            </div>
        )
    }
}

export default Dashboard
