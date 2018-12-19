import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import PostsList from './PostsList'
import Post from './Post'

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
                <Route path='/posts' exact
                    render={ ({match}) => <PostsList q={ this.props.q } posts={ this.state.posts } match={ match } /> } />

                <Route path='/posts/:id'
                    render={ ({match}) => <Post posts={ this.state.posts } match={ match } /> } />
                {/* <Route path='/posts' component={ postsList } /> */}
                {/* <Route path='/posts' component={ postsList } />                 */}
            </div>
        )
    }
}

export default Dashboard
