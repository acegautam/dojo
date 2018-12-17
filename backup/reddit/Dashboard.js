import React, { Component } from 'react'
import axios from 'axios'
import PostsList from './PostsList'

import '../../styles/reddit-dash.scss'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { posts: [] }
    }

    componentDidMount() {
        const redditBaseUrl = 'https://www.reddit.com/r'
        const url = `${redditBaseUrl}/${this.props.q}.json`
        axios.get(url)
            .then(res => {
                const posts = res.data.data.children.map(post => post.data).filter(post => post.selftext !== '')
                console.log('1. posts', posts)
                this.setState({ redditPosts: posts })
            });
    }

    render() {
        console.log('2. reddit', this.state.redditPosts)
        return (
            <div className='container dashboard'>
                {/* <h1>Reddit Dashboard</h1>
                <div>
                    <p>"{this.props.q}" related posts [{this.state.redditPosts.length}]</p>
                </div>
                <PostsList posts={ this.state.redditPosts } /> */}
            </div>
        )
    }
}

export default Dashboard
