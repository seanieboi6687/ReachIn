import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, getComments } from "../../store/comment";
import './CommentIndex.css'
import commentdefaultprofile from '../../components/Profilebutton/profile-default.png'
import { getUsers } from "../../store/user";
import { deleteComment } from "../../store/comment";
import commenttrash from '../../components/PostIndex/posttrash.png'
import commentedit from '../../components/PostIndex/editpencil.png'
import EditCommentModal from "./CommentEditModal";

const CommentIndex = ({postid}) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const allComments = useSelector(getComments)
    const state = useSelector(getUsers)
    const [editOpen, setEditOpen] = useState(false)

    const filteredComments = allComments.slice(0, allComments.length - 1).filter(comment => comment.postId === postid)
    const allUsers = state[3]

    // console.log(allComments)
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
                            <img className="comment-edit-button"
                                src={commentedit}
                                onClick={() => setEditOpen(true)}>
                            </img>
                            <EditCommentModal commentid={comment.id} open={editOpen} onClose={()=> setEditOpen(false)}>
                                Comment Edit Form Container
                            </EditCommentModal>
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