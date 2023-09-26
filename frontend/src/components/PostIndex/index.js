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
import Comment from '../Comment/Comment'

const PostIndex = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(getPosts)
    const postsReverse = [...posts].reverse()
    const [openPostId, setOpenPostId] = useState(null);
    const [openEditPostId, setOpenEditPostId] = useState(null)
    const [commentOpen, setCommentOpen] = useState({});

    useEffect(() => {
        dispatch(fetchAllPosts())
    },[dispatch])
    console.log(posts)

    const handleOpening = (postId) => {
        setCommentOpen((prevState) => ({
            ...prevState,
            [postId]: !prevState[postId], // Toggle the state for the specific post
        }));
    };

    return (
        <div className='post-index'>
            {postsReverse.map(post => {
                const isOpen = commentOpen[post.id];
                if (sessionUser.id === post.authorId){
                    return (
                        <div className='post-container' key={post.id}>
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
                            <div className='post-contents1'>
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
                                        <p className='like-label'>Like</p>
                                    </div>
                                    <div className='comment-button-container' onClick={() => handleOpening(post.id)}>
                                        <img className='comment-png' src={commentpng}/>
                                        <p className='comment-label'>Comment</p>
                                    </div>
                                </div>
                                <div className='comment-section-container'>
                                    {isOpen && <Comment open={commentOpen}/>}
                                </div>
                            </div>
                        </div>
                    )
                } else {
                return (
                    <div className='post-container2'>
                        <div className='post-contents'>
                            <div className='user-tag-container'>
                                author_id: {post.authorId}
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
                                    <img className='like-png' src={likepng} />
                                    <p className='like-label'>Like</p>
                                </div>
                                <div className='comment-button-container' onClick={() => setCommentOpen(true)}>
                                    <img className='comment-png' src={commentpng} />
                                    <p className='comment-label'>Comment</p>
                                </div>
                                <div className='comment-section-container'>
                                    <Comment open={commentOpen} onClose={() => setCommentOpen(false)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            })}
        </div>
    )
}

export default PostIndex