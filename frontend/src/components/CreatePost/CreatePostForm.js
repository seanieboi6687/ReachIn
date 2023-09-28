import React, { useState } from "react";
import { createPost } from "../../store/post";
import { useDispatch } from "react-redux";
import uploadimg from './imgicon.png'

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

    const imageStyle = {
        width: '3rem',  // Adjust the width and height as needed
        borderRadius: '40px',
        padding: '5px',
        backgroundColor: 'rgb(244, 242, 238)',
        cursor: "pointer",
        marginTop: "1rem",
        transition: "0.2s ease-in-out"
        // You can add more styles as needed
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
                <label for="post-photo-upload-button" className="image-upload-label">
                    <img className="upload-image" src={uploadimg} style={imageStyle}></img>
                </label>
                <input id="post-photo-upload-button" type="file" onChange={handleFile} style={{ display: 'none' }}></input>
                <button type="submit" className="submit-create-post-button">Post</button>
            </div>
        </form>
    );
};

export default CreatePostForm;