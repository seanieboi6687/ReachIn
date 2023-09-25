import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost, fetchOnePost, updatePost } from "../../store/post";
import { useEffect, useState } from "react";
import './UpdateForm.css'

const UpdateForm = ({postId, onClose}) => {
    const dispatch = useDispatch()
    const post = useSelector(getOnePost(postId))
    const [body, setBody] = useState(post.body)

    useEffect(() => {
        if (postId){
            dispatch(fetchOnePost(postId))
        }
    }, [postId])

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updatePost({...post, id: postId, body}))
        onClose()
    }

    return (
        <form onSubmit={handleUpdate}>
            <textarea className="edit-post-input" onChange={(e) => setBody(e.target.value)} value={body}/>
            <button type="submit" className="edit-save-button">Save</button>
        </form>
    )
}

export default UpdateForm