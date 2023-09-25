import '../../components/PostIndex/PostIndex.css'
import { fetchAllPosts, getPosts } from '../../store/post'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import pencil from '../../components/PostIndex/editpencil.png'
import trash from '../../components/PostIndex/posttrash.png'
import PostDeleteModal from './PostDeleteModal'
import EditPostModal from './PostEditModal'
import { useState } from 'react'
import UpdateForm from '../UpdatePost/UpdateForm'
import likepng from './likepng.png'
import commentpng from './commentpng.png'

const PostIndex = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(getPosts)
    const postsReverse = [...posts].reverse()
    const [openPostId, setOpenPostId] = useState(null);
    const [openEditPostId, setOpenEditPostId] = useState(null)

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
                                <img onClick={() => setOpenEditPostId(post.id)} className="edit-pencil" src={pencil} />
                                <EditPostModal postId={post.id} open={openEditPostId === post.id} onClose={() => setOpenEditPostId(null)}>
                                    <UpdateForm postId={openEditPostId} onClose={() => setOpenEditPostId(null)} />
                                </EditPostModal>
                            </div>
                            <div className="trash-container">
                                <img onClick={() => setOpenPostId(post.id)} className="trash" src={trash} />
                                    <PostDeleteModal postId={post.id} open={openPostId === post.id} onClose={() => setOpenPostId(null)}>
                                        <h1 className='delete-post-heading'>Delete post?</h1>
                                        <p className='delete-post-question'>Are you sure you want to permanently remove this post from ReachIn?</p>
                                    </PostDeleteModal>
                            </div>
                            <div className='post-contents'>
                                <div>
                                    {sessionUser.firstName} {sessionUser.lastName}
                                </div>
                                <div>
                                    Created At: {post.createdAt}
                                </div>
                                <div className='post-body-container'>
                                    {post.body}
                                </div>
                                <div>
                                    <hr className='post-index-divider'/>
                                </div>
                                <div className='post-interaction-container'>
                                    <div className='like-button-container'>
                                        <img className='like-png' src={likepng}/>
                                        <label className='like-label'>Like</label>
                                    </div>
                                    <div className='comment-button-container'>
                                        <img className='comment-png' src={commentpng}/>
                                        <label className='comment-label'>Comment</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                return (
                    <div className='post-container'>
                        <div>
                            author_id: {post.authorId}
                        </div>
                        <div>
                            postId: {post.id}
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