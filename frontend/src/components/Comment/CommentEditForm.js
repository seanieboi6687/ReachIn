import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchComment, getOneComment, updateComment } from "../../store/comment";
import { useState, useEffect } from "react";
import './CommentEditForm.css'

const CommentUpdateForm =({commentId, onClose}) => {
    const dispatch = useDispatch()
    const comment = useSelector(getOneComment(commentId))
    const [content, setContent] = useState(comment.content)

    const handleTextareaInput = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

    useEffect(() => {
        if (commentId) {
            dispatch(fetchComment(commentId))
        }
    }, [commentId])

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateComment({ ...comment, id: commentId, content }))
        onClose()
    }

    return (
        <form onSubmit={handleUpdate}>
            <textarea className="edit-comment-input"
                onChange={(e) => setContent(e.target.value)}
                onInput={handleTextareaInput}
                value={content} />
            <button type="submit" className="comment-edit-save-button">Save</button>
        </form>
    )
}

export default CommentUpdateForm;