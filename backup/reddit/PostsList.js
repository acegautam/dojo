import React, { Component } from 'react'

class PostsList extends Component {
    constructor (props) {
        super(props)
        const postParams = {
            currentBatch: 1,
            postsInBatch: 5,
            throttleChars: 200
        }
        console.log('props', props)
        const { posts } = props
        console.log(posts)
        const { throttleChars, postsInBatch, currentBatch } = postParams
        console.log(throttleChars, postsInBatch, currentBatch)
        const postsShown = postsInBatch * currentBatch
        const modPosts = posts.map(post => {
            const hasMore = (typeof(post.showAll) === 'undefined' && post.selftext.length > throttleChars)        
            return {
                id : post.id,
                title : post.title,
                author : post.author,
                content: hasMore ? `${post.selftext.substring(0, throttleChars)} ...` : post.selftext,
                hasMore
            }
        }).slice(0, postsShown)
        console.log('modPosts', modPosts)
        this.state = {
            ...postParams,
            modPosts
        }

        this.loadMore = this.loadMore.bind(this)
        this.showAll = this.showAll.bind(this)
    }

    loadMore() {
        this.setState({
            currentBatch: this.state.currentBatch + 1
        })
    }

    showAll(idx) {
        console.log('index', idx)
        this.props.posts[idx].showAll = true
    }

    render () {
        const { modPosts, postsInBatch, currentBatch } = this.state
        console.log('this.state', this.state)
        const postsShown = postsInBatch * currentBatch
        
        return (
            <div className='posts'>
                <div className='my-3 p-3 bg-white rounded shadow-sm'>
                    <h6 className='border-bottom border-gray pb-2 mb-0'>Recent posts</h6>
                    {modPosts.map((post, idx) => (
                        <div key={ post.id } className='media text-muted pt-3'>
                            <img className='mr-2 rounded' alt='thumb' src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_167b5a30074%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_167b5a30074%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2212.3046875%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' data-holder-rendered='true' />
                            <p className='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'>
                                <strong className='d-block text-gray-dark'>@{ post.author }</strong>
                                { post.content }
                                { post.hasMore && 
                                    <button type="button" className="btn btn-sm btn-link"
                                        onClick={() =>  { this.showAll(idx) }}> [show all] </button>                            
                                }
                            </p>
                        </div>
                    ))}
                    {postsShown < this.props.posts.length &&
                        <small className='d-block text-right mt-3'>
                            {/* <a href='#'>All updates</a> */}
                            <button type="button" className="btn btn-sm btn-link" onClick={this.loadMore}>Load more posts</button>
                        </small>
                    }
                </div>
            </div>
        )
    }
}

export default PostsList