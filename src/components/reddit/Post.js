import React from 'react'
import { Link } from 'react-router-dom'
import { find } from 'lodash'

const Post = ({ match, posts }) => {
    const post = find(posts, post => post.id === match.params.id)
    return (
        <div className='post-info my-3 bg-white rounded shadow-sm'>
            <div className='back-btn float-right'>
                <Link to='/posts'>
                    <i class="far fa-arrow-alt-circle-left"></i>
                </Link>
            </div>
            <h6 className='border-bottom border-gray pb-2 mb-0'>{ post.title }</h6>
            {/* <div className="float-right">
                <i class="far fa-arrow-alt-circle-left"></i>
                <div class="w-100 ph1 pv2 tc f2">
                    <span class="text">back</span>
                </div>
            </div> */}
            <div key={ post.id } className='post media text-muted pt-3'>
                <div className='media-body pb-3 mb-0 small lh-125 border-bottom border-gray'>
                    { post.selftext }
                </div>
            </div>
        </div>
    )
}

export default Post
