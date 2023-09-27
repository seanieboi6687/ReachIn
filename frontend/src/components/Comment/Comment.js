import React from "react";
import defaultprofile from '../../components/Profilebutton/profile-default.png'
import CommentIndex from "./CommentIndex";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { createComment } from "../../store/comment";

const Comment = ({postid, open}) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createComment({
            content: content,
            postId: postid
        }))
        setContent("")
    }

    if (!open) return null

    return (
        <div className="comment-form-container">
            <div className="comment-pfp-container">
                <img className="comment-profile-pic" src={defaultprofile} alt="pfp"></img>
            </div>
            <form className="comment-input-container">
                <div>
                    <input type="text" className="comment-form" 
                    placeholder="Add a comment..." 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    >
                    </input>
                </div>
            </form>
            <div className="submit-comment-button-container">
                { content === "" ?
                    <button className="post-comment-button1">
                        Post
                    </button> :
                    <button className="post-comment-button2" onClick={handleSubmit}>
                        Post
                    </button>
                }
            </div>
            <div className="comments-container">
                <CommentIndex postid={postid}/>
            </div>
        </div>
    )
}

export default Comment