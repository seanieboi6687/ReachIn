import React, { useState } from "react";

const CreatePostForm = () => {
    const [inputValue, setInputValue] = useState("");
    const maxLength = 910;
    const handleTextareaInput = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        
        if (value.length <= maxLength){
            setInputValue(value);
        }
    };

    return (
        <form>
            <textarea
                className="post-body-input"
                value={inputValue}
                onChange={handleInputChange}
                onInput={handleTextareaInput}
                placeholder="What do you want to talk about?"
            />
        </form>
    );
};

export default CreatePostForm;