import React, { useState } from "react";
import { createPost } from "../../store/post";
import { useDispatch } from "react-redux";

const CreatePostForm = ({onClose}) => {
    const [body, setBody] = useState('')
    const [photoFile, setPhotoFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null)
    const dispatch = useDispatch();

    const handleTextareaInput = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

    const handleFile = ({ currentTarget }) => {
        const file = currentTarget.files[0];
        setPhotoFile(file);
        if (file) {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => setPhotoUrl(fileReader.result)
        } else {
            setPhotoUrl(null)
        }
    }

    const updateBody = (e) => {
        const maxLength = 900;

        if (e.target.value.length <= maxLength){
            setBody(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = new FormData();
        newPost.append('post[body]', body)
        if (photoFile) {
            newPost.append('post[photo]', photoFile)
        }
        dispatch(createPost(newPost))
        setBody("")
        setPhotoFile(null)
        onClose()
    };

    let preview = null;
    if (photoUrl) preview = <img className="preview-image" src={photoUrl} alt=""/>

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                className="post-body-input"
                value={body}
                onChange={updateBody}
                onInput={handleTextareaInput}
                placeholder="What do you want to talk about?"
            />
            <div className="preview-container">
                {preview}
            </div>
            <div className="post-form-button-container">
                <input className="post-photo-upload-button" type="file" onChange={handleFile}></input>
                <button type="submit" className="submit-create-post-button">Post</button>
            </div>
        </form>
    );
};

export default CreatePostForm;