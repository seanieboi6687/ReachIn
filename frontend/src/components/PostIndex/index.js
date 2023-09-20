import '../../components/PostIndex/PostIndex.css'
import { fetchAllPosts, getPosts } from '../../store/post'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

const PostIndex = () => {
    const dispatch = useDispatch()
    const posts = useSelector(getPosts)
    useEffect(() => {
        dispatch(fetchAllPosts())
    },[])

    return (
        <div className='post-index'>
            {posts.map(post => {
                return (
                    <div className='post-container'>
                        {post.body}
                        {post.createdAt}
                    </div>
                )
            })}
        </div>
    )
}

export default PostIndex