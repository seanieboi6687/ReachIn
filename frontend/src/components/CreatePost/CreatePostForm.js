import React, { useState } from "react";
import { createPost } from "../../store/post";
import { useDispatch } from "react-redux";

const CreatePostForm = () => {
    const [errorMessages, setErrorMessages] = useState({})
    const [body, setBody] = useState('')
    const dispatch = useDispatch();

    const handleTextareaInput = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

    const updateBody = (e) => {
        const maxLength = 900;

        if (e.target.value.length <= maxLength){
            setBody(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createPost({
            body: body
        }))
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                className="post-body-input"
                value={body}
                onChange={updateBody}
                onInput={handleTextareaInput}
                placeholder="What do you want to talk about?"
            />
                <button type="submit" className="submit-create-post-button">Post</button>
        </form>
    );
};

export default CreatePostForm;