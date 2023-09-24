import React from "react";
import '../../components/Newsfeed/Newsfeed.css'
import PostIndex from "../PostIndex";
import { useSelector, useDispatch } from "react-redux";
import defaultProfile from '../../components/Profilebutton/profile-default.png'
import { createPost } from "../../store/post";
import Modal from "../CreatePost/Modal";
import { useState } from "react";
import CreatePostForm from "../CreatePost/CreatePostForm";


function Newsfeed() {
    const [isOpen, setIsOpen] = useState(false)
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="newsfeed-container">

            <div className="newsfeed-grid">

                <div className="left-container">
                        <div className="side-profile-container">
                            <img className="side-profile-post" src={defaultProfile}></img>
                            <div className="user-name-text">{sessionUser.firstName} {sessionUser.lastName}</div>
                        </div>
                </div>

                <div className="center-container">
                    <div className="create-post-container">
                        <div className="create-post">
                            <img className="default-profile-pic" src={defaultProfile}></img>
                            <div className="post-create-input-container">
                                <button onClick={() => setIsOpen(true)} className="start-post-create-button">Start a post</button>
                                <div className="modal-container">
                                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                                        <CreatePostForm/>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-index-container">
                        <PostIndex />
                    </div>
                </div>

                <div className="right-container">
                    <div className="dev-profile-container">
                        <p className="about">About the Developer</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Newsfeed