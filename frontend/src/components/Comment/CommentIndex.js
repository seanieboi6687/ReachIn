import React from "react";
import { useSelector } from "react-redux";
import { getComments } from "../../store/comment";
import './CommentIndex.css'
import commentdefaultprofile from '../../components/Profilebutton/profile-default.png'
import { getUsers } from "../../store/user";

const CommentIndex = ({postid}) => {
    const sessionUser = useSelector(state => state.session.user);
    const allComments = useSelector(getComments)
    const state = useSelector(getUsers)

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
                            <p className="commenter-name">{fname} {lname}</p>
                            <p className="comment-content1" key={comment.id}>{comment.content}</p>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <img className="comment-default-pfp" src={commentdefaultprofile} alt=""></img>
                        <div className="comment-content-container">
                            <p className="commenter-name">{fname} {lname}</p>
                            <p className="comment-content1" key={comment.id}>{comment.content}</p>
                        </div>
                    </>
                )
            }
        })
    )
}

export default CommentIndex