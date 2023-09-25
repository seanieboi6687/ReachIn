import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost, fetchOnePost, updatePost } from "../../store/post";
import { useEffect, useState } from "react";

const UpdateForm = () => {
    debugger
    const dispatch = useDispatch()
    const { postId } = useParams()
    const post = useSelector(getOnePost(postId))
    const [body, setBody] = useState(post.body)

    useEffect(() => {
        if (postId) {
            dispatch(fetchOnePost(postId))
        }
    },[postId])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePost({...post, id: postId, body}))
    } 
    return (
        <form onSubmit={handleSubmit}>
            <textarea className="edit-post-input" onChange={e => setBody(e.target.value)} value={body}/>
            <button className="save-button">Save</button>
        </form>
    )
}

export default UpdateForm