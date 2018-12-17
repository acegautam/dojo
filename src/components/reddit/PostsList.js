import React, { Component } from 'react'

class PostsList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentBatch: 1,
            postsInBatch: 5,
            throttleChars: 200
        }
        this.loadMore = this.loadMore.bind(this)
        this.toggleShowAll = this.toggleShowAll.bind(this)
    }

    loadMore() {
        this.setState(state => ({
            currentBatch: state.currentBatch + 1            
        }))
    }

    toggleShowAll(idx) {
        this.props.posts[idx].toggleShowAll = !(this.props.posts[idx].toggleShowAll || false)
        // dummy call - to invoke render
        this.setState(state => ({
            currentBatch: state.currentBatch 
        }))
    }

    render () {
        const { posts } = this.props
        const { throttleChars, postsInBatch, currentBatch } = this.state
        const postsShown = postsInBatch * currentBatch
        const modPosts = posts.map(post => {
            const hasMore = (!post.toggleShowAll && post.selftext.length > throttleChars)  
            return {
                ...post,
                content: hasMore ? `${post.selftext.substring(0, throttleChars)} ...` : post.selftext,
                hasMore
            }
        }).slice(0, postsShown)

        return (
            <div className='posts'>
                <div className='my-3 p-3 bg-white rounded shadow-sm'>
                    <h6 className='border-bottom border-gray pb-2 mb-0'>Recent posts</h6>
                    {modPosts.map((post, idx) => (
                        <div key={ post.id } className='post media text-muted pt-3'>
                            <div className='score rounded' style={{'--list-index': idx}} title='score'>{ post.score }</div>
                            <div className='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'>
                                <strong className='d-block text-gray-dark'>@{ post.author }</strong>
                                <p className='lead'>
                                    { post.title }
                                    <span className="badge badge-pill badge-info float-right" title={`${post.num_comments} comments`}>
                                        { post.num_comments }
                                    </span>
                                </p>
                                { post.content }
                                { post.hasMore !== null && 
                                    <button type="button" className="show-all btn btn-sm btn-link"
                                        onClick={() =>  { this.toggleShowAll(idx) }}> 
                                        {(post.hasMore === true) ? `[show all]` : `show less`} 
                                    </button>                            
                                }
                                {post.url &&
                                    <div className='text-small text-right'>
                                        <i className="fas fa-globe"></i>&nbsp;
                                        <a href={post.url} target='_blank' rel='noopener noreferrer'>Visit site</a>
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
                    {postsShown < posts.length &&
                        <small className='d-block text-right mt-3'>
                            <button type="button" className="btn btn-sm btn-link" onClick={this.loadMore}>Load more posts</button>
                        </small>
                    }
                </div>
            </div>
        )
    }
}

export default PostsList