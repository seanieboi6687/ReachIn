import './PostIndex.css'
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
import defaultpfp from '../../components/Profilebutton/profile-default.png'
import { getUsers } from '../../store/user'
import { createLike, getLikes, fetchAllLikes, deleteLike } from '../../store/like'

const PostIndex = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const posts = useSelector(getPosts)
    const likes = useSelector(getLikes)
    const postsReverse = [...posts].reverse()
    const [openPostId, setOpenPostId] = useState(null);
    const [openEditPostId, setOpenEditPostId] = useState(null)
    const [commentOpen, setCommentOpen] = useState({});

    const state = useSelector(getUsers)
    const allUsers = state[3]

    useEffect(() => {
        dispatch(fetchAllPosts());
        dispatch(fetchAllLikes());
    }, [dispatch])

    const handleOpening = (postId) => {
        setCommentOpen((prevState) => ({ ...prevState, [postId]: !prevState[postId] }));
    };

    const handleLike = (postId) => {
        const postLikes = [...likes].filter(like => like.postId === postId)
        const notLiked = postLikes.every(like => like.likerId !== sessionUser.id)
        console.log(notLiked)
        if (notLiked) {
            dispatch(createLike({
                likerId: sessionUser.id,
                postId: postId
            }))
        } else {
            const usersLike = postLikes.filter(like => like.likerId === sessionUser.id)
            dispatch(deleteLike(usersLike[0].id))
        }
    }

    return (
        <div className='post-index'>
            {postsReverse.map(post => {
                const isOpen = commentOpen[post.id];
                const thisPostLikesArr = Object.values(likes)
                const postLikes = thisPostLikesArr.filter(like => like.postId === post.id)
                if (sessionUser?.id === post?.authorId){
                    return (
                        <div className='post-container' key={post.id}>
                            <div className='post-contents1'>
                                <div className="edit-pencil-container">
                                    <img onClick={() => setOpenEditPostId(post.id)} className="edit-pencil" src={pencil} alt=''/>
                                    <EditPostModal postId={post.id} open={openEditPostId === post.id} onClose={() => setOpenEditPostId(null)}>
                                        <UpdateForm postId={openEditPostId} onClose={() => setOpenEditPostId(null)} />
                                    </EditPostModal>
                                </div>
                                <div className="trash-container">
                                    <img onClick={() => setOpenPostId(post.id)} className="trash" src={trash} alt=''/>
                                    <PostDeleteModal postId={post.id} open={openPostId === post.id} onClose={() => setOpenPostId(null)}>
                                        <h1 className='delete-post-heading'>Delete post?</h1>
                                        <p className='delete-post-question'>Are you sure you want to permanently remove this post from ReachIn?</p>
                                    </PostDeleteModal>
                                </div>
                                <div className='pfp-container'>
                                    <img className="default-post-pfp" src={defaultpfp} alt=''></img>
                                </div>
                                <div className='post-user-name-container'>
                                    {sessionUser.firstName} {sessionUser.lastName}
                                </div>
                                <div className='timestamp-container1'>
                                    {(new Date(post.createdAt)).toLocaleDateString('en-US')}
                                </div>
                                <div className='post-body-container'>
                                    {post.body}
                                </div>
                                <div className='post-image-container'>
                                    <img className="post-attached-image" src={post.photoUrl} alt=''/>
                                </div>
                                <div>
                                    <hr className='post-index-divider'/>
                                </div>
                                <div className='post-interaction-container'>
                                    <div className='like-button-container' onClick={() => handleLike(post.id)} >
                                        <img className='like-png' src={likepng} alt=''/>
                                        <p className='like-label'>Like{postLikes.length}</p>
                                    </div>
                                    <div className='comment-button-container' onClick={() => handleOpening(post.id)}>
                                        <img className='comment-png' src={commentpng} alt=''/>
                                        <p className='comment-label'>Comment</p>
                                    </div>
                                </div>
                                <div className='comment-section-container'>
                                    {isOpen && <Comment postid={post.id} open={commentOpen}/>}
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    const authorid = post.authorId
                    const fname = allUsers[authorid].firstName
                    const lname = allUsers[authorid].lastName
                return (
                    <div className='post-container2'>
                        <div className='post-contents2'>
                            <div className='pfp-container2'>
                                <img className="default-post-pfp" src={defaultpfp} alt=''></img>
                            </div>
                            <div className='user-tag-container'>
                                {fname} {lname}
                            </div>
                            <div className='timestamp-container2'>
                                {(new Date(post.createdAt)).toLocaleDateString('en-US')}
                            </div>
                            <div className='post-body-container'>
                                {post.body}
                            </div>
                            <div className='post-image-container'>
                                <img className="post-attached-image" src={post.photoUrl} alt=''/>
                            </div>
                            <div>
                                <hr className='post-index-divider'/>
                            </div>
                            <div className='post-interaction-container'>
                                <div className='like-button-container' onClick={() => handleLike(post.id)}>
                                    <img className='like-png' src={likepng} alt=''/>
                                    <p className='like-label'>Like{postLikes.length}</p>
                                </div>
                                <div className='comment-button-container' onClick={() => handleOpening(post.id)}>
                                    <img className='comment-png' src={commentpng} alt=''/>
                                    <p className='comment-label'>Comment</p>
                                </div>
                            </div>
                            <div className='comment-section-container'>
                                {isOpen && <Comment postid={post.id} open={commentOpen} />}
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