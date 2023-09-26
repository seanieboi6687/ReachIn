import React from "react";
import defaultprofile from '../../components/Profilebutton/profile-default.png'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchComments } from "../../store/comment";
import { getComments } from "../../store/comment";

const Comment = ({comments, postid, open}) => {
    const allComments = useSelector(getComments)
    console.log(allComments)

    if (!open) return null

    return (
        <div className="comment-form-container">
            <div className="comment-pfp-container">
                <img className="comment-profile-pic" src={defaultprofile}></img>
            </div>
            <form className="comment-input-container">
                <div>
                    <input type="text" className="comment-form" placeholder="Add a comment..."></input>
                </div>
            </form>
            <div className="submit-comment-button-container">
                <button className="post-comment-button">Post</button>
            </div>
            <div className="comments-container">
                comment place holder
            </div>
        </div>
    )
}

export default Comment