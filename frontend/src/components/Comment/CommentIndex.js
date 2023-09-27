import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, getComments } from "../../store/comment";
import './CommentIndex.css'
import commentdefaultprofile from '../../components/Profilebutton/profile-default.png'
import { getUsers } from "../../store/user";
import { deleteComment } from "../../store/comment";
import commenttrash from '../../components/PostIndex/posttrash.png'

const CommentIndex = ({postid}) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const allComments = useSelector(getComments)
    const state = useSelector(getUsers)

    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    const filteredComments = allComments.filter(comment => comment.postId === postid)
    const allUsers = state[3]

    return (
        filteredComments.map(comment => {
            const commenterid = comment.commenterId
            const fname = allUsers[commenterid].firstName
            const lname = allUsers[commenterid].lastName
            if (sessionUser.id === comment.commenterId) {
                return (
                    <>
                        <img className="comment-default-pfp" src={commentdefaultprofile} alt=""></img>
                        <div className="comment-content-container">
                            <img className="comment-delete-button"
                                onClick={() => dispatch(deleteComment(comment.id))}
                                src={commenttrash}>
                                </img>
                            <p className="commenter-name1">{fname} {lname}</p>
                            <p className="comment-content1" key={comment.id}>{comment.content}</p>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <img className="comment-default-pfp" src={commentdefaultprofile} alt=""></img>
                        <div className="comment-content-container">
                            <p className="commenter-name2">{fname} {lname}</p>
                            <p className="comment-content1" key={comment.id}>{comment.content}</p>
                        </div>
                    </>
                )
            }
        })
    )
}

export default CommentIndex