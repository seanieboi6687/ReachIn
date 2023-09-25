import '../../components/PostIndex/PostIndex.css'
import { fetchAllPosts, getPosts } from '../../store/post'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import pencil from '../../components/PostIndex/editpencil.png'
import trash from '../../components/PostIndex/posttrash.png'
import PostDeleteModal from './PostDeleteModal'
import { useState } from 'react'

const PostIndex = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(getPosts)
    const postsReverse = [...posts].reverse()
    const [openPostId, setOpenPostId] = useState(null);

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
                            <div className="edit-pencil-container">
                                <img className="edit-pencil" src={pencil} />
                                
                            </div>
                            <div className="trash-container">
                                <img onClick={() => setOpenPostId(post.id)}className="trash" src={trash} />
                                    <PostDeleteModal postId={post.id} open={openPostId === post.id} onClose={() => setOpenPostId(null)}>
                                        <h1 className='delete-post-heading'>Delete post?</h1>
                                        <p className='delete-post-question'>Are you sure you want to permanently remove this post from ReachIn?</p>
                                    </PostDeleteModal>
                            </div>
                            <div className='post-contents'>
                                <div>
                                    author_id: {post?.authorId}
                                </div>
                                <div>
                                    postId: {post?.id}
                                </div>
                                <div>
                                    Body: {post?.body}
                                </div>
                                <div>
                                    Created At: {post?.createdAt}
                                </div>
                            </div>
                        </div>
                    )
                } else {
                return (
                    <div className='post-container'>
                        <div>
                            author_id: {post?.authorId}
                        </div>
                        <div>
                            postId: {post?.id}
                        </div>
                        <div>
                            Body: {post?.body}
                        </div>
                        <div>
                            Created At: {post?.createdAt}    
                        </div>
                    </div>
                    )
                }
            })}
        </div>
    )
}

export default PostIndex