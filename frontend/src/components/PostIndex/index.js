import '../../components/PostIndex/PostIndex.css'
import { fetchAllPosts, getPosts } from '../../store/post'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import OptionButton from '../PostOptionButton'

const PostIndex = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(getPosts)
    const postsReverse = [...posts].reverse()
    useEffect(() => {
        dispatch(fetchAllPosts())
    },[dispatch])
    console.log(posts)

    return (
        <div className='post-index'>
            {postsReverse.map(post => {
                if (sessionUser.id === post.authorId){
                    return (
                        <div className='post-container'>
                            <div>
                                author_id: {post.authorId}
                            </div>
                            <div>
                                Body: {post.body}
                            </div>
                            <div>
                                Created At: {post.createdAt}
                            </div>
                            <OptionButton />
                        </div>
                    )
                } else {
                return (
                    <div className='post-container'>
                        <div>
                            author_id: {post.authorId}
                        </div>
                        <div>
                            Body: {post.body}
                        </div>
                        <div>
                            Created At: {post.createdAt}    
                        </div>
                    </div>
                    )
                }
            })}
        </div>
    )
}

export default PostIndex